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
  Line,
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

  var dateFormatted = { date: "", month: "", year: "" };
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (storyData.date) {
    const d = new Date(storyData.date);
    dateFormatted = {
      date: d.getDate().toString(),
      month: months[d.getMonth()],
      year: d.getFullYear().toString(),
    };
  }

  return (
    <AutoLayout
      width={s.vw}
      fill={"#FFFFFF"}
      cornerRadius={s.md}
      stroke={storyItem.color.light}
      strokeWidth={4}
      strokeAlign="outside"
      direction="vertical"
    >
      <AutoLayout spacing={"auto"} width="fill-parent">
        <AutoLayout
          padding={{ top: s.md, left: s.lg }}
          spacing={storySize === "medium" ? -4 : -3}
          verticalAlignItems="center"
        >
          <AutoLayout
            cornerRadius={s.xl}
            fill={storyItem.color.light}
            padding={{ horizontal: s.xxs, vertical: s.xxs }}
            onClick={() => onChange({ propertyName: "EDIT" })}
            tooltip="More edit options"
          >
            <SVG
              src={editIcon}
              width={s.xl}
              height={s.xl}
              opacity={0}
              fill={storyItem.color.regular}
              hoverStyle={{
                opacity: 1,
              }}
              positioning="absolute"
            ></SVG>
            <SVG src={storyItem.icon} width={s.xl} height={s.xl} hoverStyle={{opacity: 0}}></SVG>
            
          </AutoLayout>

          <AutoLayout
            padding={{ vertical: s.xxs, horizontal: s.md }}
            fill={storyItem.color.light}
            cornerRadius={{
              topLeft: 0,
              bottomLeft: 0,
              topRight: s.xl,
              bottomRight: s.xl,
            }}
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
              width={s.vw / 3.5}
              horizontalAlignText="center"
              inputBehavior="wrap"
            />
          </AutoLayout>
        </AutoLayout>
        <AutoLayout width={1} height={1}></AutoLayout>
        <AutoLayout
          hidden={!storyData.date && !storyData.link && !storyData.score}
          cornerRadius={{ bottomLeft: s.xs }}
          stroke={storyItem.color.light}
          strokeWidth={1}
          strokeAlign="outside"
        >
          <AutoLayout
            hidden={!storyData.link}
            width={s.xxxl}
            horizontalAlignItems={"center"}
            direction="vertical"
            padding={{ left: s.xs, right: s.xs, top: s.sm, bottom: s.xs }}
            spacing={s.xss}
          >
            <Text
              fontSize={s.xs}
              fontFamily={STYLE.fontFamily}
              textCase="upper"
              fontWeight="bold"
              horizontalAlignText="center"
              width="fill-parent"
              height="hug-contents"
              fill="#999"
            >
              link
            </Text>
            <SVG
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

          <AutoLayout
            hidden={!storyData.link || !storyData.date}
            width={1}
            height="fill-parent"
            cornerRadius={s.xxs}
            fill={storyItem.color.light}
          ></AutoLayout>

          <AutoLayout
            hidden={!storyData.date}
            width={s.xxxl}
            horizontalAlignItems={"center"}
            direction="vertical"
            padding={{ left: s.xs, right: s.xs, top: s.xs, bottom: s.xs }}
            strokeAlign="outside"
            strokeWidth={1}
            stroke={storyItem.color.light}
          >
            <Text
              fontSize={s.xs}
              fontFamily={STYLE.fontFamily}
              textCase="upper"
              fontWeight="bold"
              horizontalAlignText="center"
              width="fill-parent"
              height="hug-contents"
              fill="#999"
            >
              {dateFormatted.month}
            </Text>
            <Text
              fontSize={s.md}
              fontFamily={STYLE.fontFamily}
              textCase="upper"
              fontWeight="bold"
              horizontalAlignText="center"
              width="fill-parent"
              height="hug-contents"
              fill="#999"
            >
              {dateFormatted.date}
            </Text>
            <Text
              fontSize={s.xs}
              fontFamily={STYLE.fontFamily}
              textCase="upper"
              fontWeight="bold"
              horizontalAlignText="center"
              width="fill-parent"
              height="hug-contents"
              fill="#999"
            >
              {dateFormatted.year}
            </Text>
          </AutoLayout>

          <AutoLayout
            hidden={(!storyData.link && !storyData.date) || !storyData.score}
            width={1}
            height="fill-parent"
            cornerRadius={s.xxs}
            fill={storyItem.color.light}
          ></AutoLayout>

          <AutoLayout
            hidden={!storyData.score}
            width={s.xxxl}
            horizontalAlignItems={"center"}
            direction="vertical"
            padding={{ left: s.xs, right: s.xs, top: s.sm, bottom: s.xs }}
            spacing={s.xxs}
          >
            <Text
              fontSize={s.xs}
              fontFamily={STYLE.fontFamily}
              textCase="upper"
              fontWeight="bold"
              horizontalAlignText="center"
              width="fill-parent"
              height="hug-contents"
              fill="#999"
            >
              score
            </Text>
            <Text
              fontSize={s.md}
              fontFamily={STYLE.fontFamily}
              textCase="upper"
              fontWeight="bold"
              horizontalAlignText="center"
              width="fill-parent"
              height="hug-contents"
              fill="#999"
            >
              {storyData.score}
            </Text>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>

      <AutoLayout
        width="fill-parent"
        direction="vertical"
        spacing={s.sm}
        padding={{ top: s.sm, bottom: s.sm, left: s.lg, right: s.lg }}
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
          fontSize={s.sm}
          fontFamily={STYLE.fontFamily}
          width="fill-parent"
          height="hug-contents"
          fill="#999"
        >
          {storyItem.description}
        </Text>

        <AutoLayout
          hidden={!storyData.description || !showDescription}
          width="fill-parent"
          overflow="visible"
          direction="vertical"
          spacing={s.sm}
        >
          <Input
            value={storyData.description || ""}
            placeholder={`Add description here…`}
            onTextEditEnd={(e) => {
              setStoryData({ ...storyData, description: e.characters });
            }}
            fontSize={s.sm}
            fontFamily={STYLE.fontFamily}
            lineHeight={s.sm * 1.5}
            fill="#666666"
            width="fill-parent"
            inputBehavior="wrap"
          />
        </AutoLayout>
        <Text
          hidden={!storyData.description}
          onClick={() => onChange({ propertyName: "DESCRIPTION" })}
          fontSize={s.xs}
          fontFamily={STYLE.fontFamily}
          textCase="upper"
          width={"fill-parent"}
          fill="#666666"
          x={s.vw - s.xxl}
        >
          {showDescription ? "hide description ↑" : "show description ↓"}
        </Text>
      </AutoLayout>

      <AutoLayout
        hidden={!storyData.tags || storyData.tags.length === 0}
        width="fill-parent"
        overflow="visible"
        direction="vertical"
        spacing={0}
      >
        <AutoLayout
          width={"fill-parent"}
          height={s.lg}
          verticalAlignItems="center"
        >
          <Frame
            width={s.lg}
            height={s.lg}
            fill={storyItem.color.light}
            cornerRadius={s.lg}
            positioning="absolute"
            x={-s.md}
          ></Frame>
          <Line
            strokeDashPattern={[s.xxs, s.xxs]}
            length="fill-parent"
            stroke={storyItem.color.light}
          />
          <Frame
            width={s.lg}
            height={s.lg}
            fill={storyItem.color.light}
            cornerRadius={s.lg}
            positioning="absolute"
            x={s.vw - s.xs}
          ></Frame>
        </AutoLayout>

        <AutoLayout
          width="fill-parent"
          padding={{ top: s.xs, right: s.lg, bottom: s.md, left: s.lg }}
          spacing={s.xs}
        >
          {storyData.tags &&
            storyData.tags.map((tag) => (
              <AutoLayout
                width={"hug-contents"}
                fill="#f0f0f0"
                padding={{ horizontal: s.xs, vertical: s.xxxs }}
                cornerRadius={s.lg}
              >
                <Text
                  fontSize={s.xs}
                  fontFamily={STYLE.fontFamily}
                  fontWeight="bold"
                  fill="#999999"
                  textCase="upper"
                >
                  {tag.replace(/\x20/g, "\xa0")}
                </Text>
              </AutoLayout>
            ))}
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}
