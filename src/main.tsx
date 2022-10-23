/** @jsx figma.widget.h */
import { once, showUI } from "@create-figma-plugin/utilities";
import storyItems from "./storyItems";
import storySizes from "./storySizes";
import {
  editIcon,
  sizeIcon,
  calendarIcon,
  linkIcon,
  descriptionShowIcon,
  descriptionHideIcon,
  tagIcon,
} from "./storySVGs";
import { StoryData } from "./storyData";

const { widget } = figma;
const {
  AutoLayout,
  Text,
  SVG,
  Frame,
  Input,
  useSyncedState,
  usePropertyMenu,
  useWidgetId,
} = widget;

export default function () {
  widget.register(Storymapper);
}

const defStoryData = {
  title: "",
  description: "",
  date: "",
  link: "",
  tags: [],
  userImpact: 100,
  userValue: "",
  usability: "",
  ethicality: "",
  feasability: "",
  viability: "",
  score: "",
};

function Storymapper() {
  const widgetId = useWidgetId();
  const [storyItem, setStoryItem] = useSyncedState("storyItem", storyItems[0]);
  const [storySize, setStorySize] = useSyncedState("storySize", "medium");
  const [showDescription, setShowDescription] = useSyncedState(
    "showDescription",
    false
  );
  const [storyData, setStoryData] = useSyncedState(
    "storyData",
    defStoryData as StoryData
  );

  // Styling sizes
  const s = storySizes[storySize];

  // Property menu
  const propertyMenuItems: Array<WidgetPropertyMenuItem> = [
    {
      tooltip: "Edit",
      propertyName: "EDIT",
      itemType: "action",
      icon: editIcon,
    },
    {
      tooltip: "Change size",
      propertyName: "SIZE",
      itemType: "action",
      icon: sizeIcon,
    },
  ];
  storyItems.forEach((item) => {
    propertyMenuItems.push({
      tooltip: item.title,
      propertyName: item.type,
      itemType: "action",
      icon: item.icon,
    });
  });

  async function onChange({
    propertyName,
  }: WidgetPropertyEvent): Promise<void> {
    await new Promise<void>(function (resolve: () => void): void {
      if (propertyName === "EDIT") {
        showUI({ width: 400, height: 600 }, { storyData });
        once("UPDATE_STORY_ITEM", function (storyData: StoryData): void {
          setStoryData(storyData);
          resolve();
        });
      } else if (propertyName === "SIZE") {
        setStorySize(storySize === "medium" ? "small" : "medium");
        figma.closePlugin();
      } else if (propertyName === "DESCRIPTION") {
        setShowDescription(!showDescription);
        figma.closePlugin();
      } else {
        const updatedItem = storyItems.find((i) => i.type === propertyName);
        if (updatedItem) setStoryItem(updatedItem);
        figma.closePlugin();
      }
    });
  }
  usePropertyMenu(propertyMenuItems, onChange);

  const STYLE = {
    fontFamily: "Inter",
  };

  return (
    <AutoLayout
      width={s.vw}
      fill={"#FFFFFF"}
      cornerRadius={s.md}
      stroke={storyItem.color.light}
      strokeWidth={2}
    >
      <AutoLayout padding={s.md}>
        <Frame
          width={s.xl}
          height={s.xl}
          cornerRadius={s.xl}
          onClick={() => onChange({ propertyName: "EDIT" })}
          tooltip="More edit options"
        >
          <SVG src={storyItem.icon} width={s.xl} height={s.xl}></SVG>
          <SVG
            src={editIcon}
            width={s.xl}
            height={s.xl}
            opacity={0}
            fill={storyItem.color.regular}
            hoverStyle={{
              opacity: 1,
            }}
          ></SVG>
        </Frame>
      </AutoLayout>

      <AutoLayout
        padding={{ top: s.md, bottom: s.md, right: s.md }}
        direction="vertical"
        spacing={s.xs}
        width="fill-parent"
        overflow="visible"
      >
        <AutoLayout
          width="fill-parent"
          verticalAlignItems="center"
          spacing={!storyData.link ? 0 : "auto"}
        >
          <AutoLayout
            padding={{ vertical: s.xxs, horizontal: s.xs }}
            fill={storyItem.color.light}
            cornerRadius={s.xxs}
            width="hug-contents"
          >
            <Input
              value={storyItem.title}
              placeholder={`Add label here…`}
              onTextEditEnd={(e) => {
                setStoryItem({ ...storyItem, title: e.characters });
              }}
              fontSize={s.sm}
              fontFamily={STYLE.fontFamily}
              textCase="upper"
              fontWeight="medium"
              width={200}
              inputBehavior="wrap"
            />
          </AutoLayout>

          <AutoLayout hidden={!storyData.link}>
            <SVG
              hidden={!storyData.link}
              onClick={() =>
                new Promise<void>(function (resolve: () => void): void {
                  setTimeout(() => {
                    resolve();
                  }, 10);
                  return figma.showUI(
                    `<script>window.open('${storyData.link}', '_blank');</script>`,
                    { visible: false }
                  );
                })
              }
              src={linkIcon}
              width={s.lg}
              height={s.lg}
            ></SVG>
          </AutoLayout>
        </AutoLayout>

        <AutoLayout
          width="fill-parent"
          direction="vertical"
          spacing={s.sm}
          padding={{ top: s.xs }}
          overflow="visible"
        >
          <Input
            value={storyData.title}
            placeholder={`Add title here…`}
            onTextEditEnd={(e) => {
              setStoryData({ ...storyData, title: e.characters });
            }}
            fontSize={s.lg}
            fontFamily={STYLE.fontFamily}
            width="fill-parent"
            inputBehavior="wrap"
          />
          <Text
            hidden={storyData.title !== ""}
            onClick={() => onChange({ propertyName: "EDIT" })}
            fontSize={s.md}
            fontFamily={STYLE.fontFamily}
            width="fill-parent"
            height="hug-contents"
            fill="#999"
          >
            {storyItem.description}
          </Text>

          <AutoLayout width="fill-parent" overflow="visible">
            <Frame width={0.01} height={0.01} overflow="visible">
              <SVG
                hidden={!storyData.description}
                onClick={() => onChange({ propertyName: "DESCRIPTION" })}
                src={
                  showDescription ? descriptionShowIcon : descriptionHideIcon
                }
                width={s.md}
                height={s.md}
                x={-s.lg}
              ></SVG>
            </Frame>
            <Text
              hidden={showDescription || !storyData.description}
              onClick={() => onChange({ propertyName: "DESCRIPTION" })}
              fontSize={s.sm}
              fontFamily={STYLE.fontFamily}
              fill="#999999"
              width="fill-parent"
              height="hug-contents"
            >
              {"…"}
            </Text>

            <Text
              hidden={!showDescription || storyData.description === ""}
              onClick={() => onChange({ propertyName: "EDIT" })}
              fontSize={s.md}
              fontFamily={STYLE.fontFamily}
              fill="#999999"
              width="fill-parent"
              height="hug-contents"
            >
              {storyData.description}
            </Text>
          </AutoLayout>
        </AutoLayout>

        <AutoLayout
          hidden={
            !storyData.date && (!storyData.tags || storyData.tags.length === 0)
          }
          width="fill-parent"
          spacing={s.xs}
          direction="vertical"
          overflow="visible"
        >
          <AutoLayout
            width="fill-parent"
            height={1}
            cornerRadius={s.xxs}
            fill={storyItem.color.light}
          ></AutoLayout>

          <AutoLayout
            hidden={!storyData.date}
            width="fill-parent"
            overflow="visible"
          >
            <Frame width={0.01} height={0.01} overflow="visible">
              <SVG src={calendarIcon} width={s.md} height={s.md} x={-s.lg} />
            </Frame>
            <Text fontSize={s.sm} fontFamily={STYLE.fontFamily} fill="#999">
              {storyData.date?.split("-").reverse().join("-")}
            </Text>
          </AutoLayout>

          <AutoLayout
            hidden={!storyData.tags || storyData.tags.length === 0}
            width="fill-parent"
            overflow="visible"
          >
            <Frame width={0.01} height={0.01} overflow="visible">
              <SVG src={tagIcon} width={s.md} height={s.md} x={-s.lg} />
            </Frame>
            <Text
              fontSize={s.sm}
              fontFamily={STYLE.fontFamily}
              fill="#999"
              width="fill-parent"
            >
              {storyData.tags &&
                storyData.tags
                  .map((tag) => {
                    return `${tag.replace(/\x20/g, "\xa0")}`;
                  })
                  .join(" • ")}
            </Text>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>

      <AutoLayout
        spacing={s.xxxs}
        hidden={!storyData.score}
        fill={storyItem.color.light}
        padding={{ vertical: s.xs, horizontal: s.xs }}
        cornerRadius={{
          topLeft: 0,
          topRight: 0,
          bottomLeft: s.md,
          bottomRight: 0,
        }}
        direction="vertical"
        horizontalAlignItems="center"
      >
        <Text
          fontSize={s.xs}
          fontFamily={STYLE.fontFamily}
          textCase="upper"
          fontWeight="medium"
          width="hug-contents"
        >
          score
        </Text>
        <Text
          fontSize={s.md}
          fontFamily={STYLE.fontFamily}
          fontWeight="bold"
          horizontalAlignText="center"
          width="hug-contents"
        >
          {storyData.score}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}
