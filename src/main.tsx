/** @jsx figma.widget.h */
import { on, once, showUI } from "@create-figma-plugin/utilities";
import storyItems from "./storyItems";
import storySizes from "./storySizes";
import {
  editIcon,
  sizeIcon,
  calendarIcon,
  linkIcon,
  descriptionIcon,
  addRightIcon,
  addBottomIcon,
} from "./storySVGs";
import { StoryData } from "./storyData";

const { widget } = figma;
const { AutoLayout, Text, SVG, useSyncedState, usePropertyMenu, useWidgetId } =
  widget;

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
  propertyMenuItems.push(
    {
      tooltip: "Add item right",
      propertyName: "ADD_RIGHT",
      itemType: "action",
      icon: addRightIcon,
    },
    {
      tooltip: "Add item below",
      propertyName: "ADD_BOTTOM",
      itemType: "action",
      icon: addBottomIcon,
    }
  );

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
      } else if (
        propertyName === "ADD_RIGHT" ||
        propertyName === "ADD_BOTTOM"
      ) {
        const r = propertyName === "ADD_RIGHT";
        const widgetNode = figma.getNodeById(widgetId) as WidgetNode;
        const widgetOverrides = { storyData : defStoryData, storyItem: storyItem, storySize: storySize };
        if(!r) widgetOverrides.storySize = "small";
        const clone = widgetNode.cloneWidget(widgetOverrides);
        // Move the cloned node
        clone.x += r ? clone.width + 20 : 0;
        clone.y += !r ? clone.height + 20 : 0;
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
      padding={s.md}
      width={s.vw}
      fill={"#FFFFFF"}
      cornerRadius={s.md}
      spacing={s.md}
      stroke={storyItem.color.light}
      strokeWidth={2}
    >
      <SVG src={storyItem.icon} width={s.xl} height={s.xl}></SVG>
      <AutoLayout direction="vertical" spacing={s.xs} width="fill-parent">
        <AutoLayout
          spacing={storyData.score !== "" ? "auto" : 0}
          width="fill-parent"
        >
          <AutoLayout
            padding={{ vertical: s.xxs, horizontal: s.xs }}
            fill={storyItem.color.light}
            cornerRadius={s.xxs}
          >
            <Text
              fontSize={s.sm}
              fontFamily={STYLE.fontFamily}
              textCase="upper"
              fontWeight="medium"
            >
              {storyItem.title}
            </Text>
          </AutoLayout>
          <AutoLayout
            hidden={
              storyData.score === "" &&
              !storyData.link &&
              !storyData.description
            }
            spacing={s.xs}
            horizontalAlignItems="end"
            width="fill-parent"
          >
            <AutoLayout spacing={s.xxxs} hidden={storyData.score === ""}>
              <SVG
                src={`<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M16 24.25S6.625 19 6.625 12.625A4.876 4.876 0 0 1 16 10.747h0a4.876 4.876 0 0 1 9.375 1.878C25.375 19 16 24.25 16 24.25Z" stroke="${storyItem.color.regular}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`}
                width={s.lg}
                height={s.lg}
              ></SVG>
              <Text
                fontSize={s.sm}
                fontFamily={STYLE.fontFamily}
                textCase="upper"
                fontWeight="medium"
                verticalAlignText="center"
                height="fill-parent"
                fill={storyItem.color.regular}
              >
                {storyData.score}
              </Text>
            </AutoLayout>
            <SVG
              hidden={!storyData.description}
              onClick={() => onChange({ propertyName: "EDIT" })}
              src={descriptionIcon}
              width={s.lg}
              height={s.lg}
            ></SVG>
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
        <AutoLayout width="fill-parent" height="hug-contents">
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
          <Text
            hidden={storyData.title === ""}
            onClick={() => onChange({ propertyName: "EDIT" })}
            fontSize={s.lg}
            fontFamily={STYLE.fontFamily}
            width="fill-parent"
            height="hug-contents"
          >
            {storyData.title}
          </Text>
        </AutoLayout>
        <AutoLayout
          hidden={
            !storyData.date && (!storyData.tags || storyData.tags.length === 0)
          }
          width="fill-parent"
          height="hug-contents"
          spacing={s.xs}
        >
          <AutoLayout hidden={!storyData.date}>
            <SVG src={calendarIcon} width={s.md} height={s.md} />
            <Text fontSize={s.sm} fontFamily={STYLE.fontFamily} fill="#999">
              {storyData.date?.split("-").reverse().join("-")}
            </Text>
          </AutoLayout>
          {storyData.tags &&
            storyData.tags.map((tag, i) => {
              return (
                <AutoLayout
                  fill="#F3F3F3"
                  padding={{
                    top: s.xxxs,
                    bottom: s.xxxs,
                    left: s.xs,
                    right: s.xs,
                  }}
                  cornerRadius={s.xxs}
                  key={`tag-${i}`}
                >
                  <Text
                    fontSize={s.xs}
                    fontFamily={STYLE.fontFamily}
                    fill="#999"
                  >
                    {tag}
                  </Text>
                </AutoLayout>
              );
            })}
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}
