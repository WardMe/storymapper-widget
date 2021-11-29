/** @jsx figma.widget.h */
import { once, showUI } from "@create-figma-plugin/utilities";
import storyItems from "./storyItems";
import storySizes from "./storySizes";
import {
  editIcon,
  sizeIcon,
  calendarIcon,
  linkIcon,
  descriptionIcon,
} from "./storySVGs";
import { StoryData } from "./storyData";

const { widget } = figma;
const { AutoLayout, Text, SVG, useSyncedState, usePropertyMenu } = widget;

export default function () {
  widget.register(Storymapper);
}

function Storymapper() {
  const [text, setText] = useSyncedState("text", "Hello\nWidgets");

  const [storyItem, setStoryItem] = useSyncedState("storyItem", storyItems[0]);
  const [storySize, setStorySize] = useSyncedState("storySize", "medium");
  const [storyData, setStoryData] = useSyncedState("storyData", {
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
  } as StoryData);

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
            hidden={storyData.score === "" && !storyData.link}
            spacing={s.xs}
          >
            <AutoLayout spacing={s.xxxs} hidden={storyData.score === ""}>
              <SVG
                src={`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 24.25C16 24.25 6.625 19 6.625 12.625C6.62519 11.4983 7.01561 10.4063 7.72989 9.53492C8.44416 8.6635 9.4382 8.06635 10.543 7.84501C11.6478 7.62366 12.7951 7.79178 13.79 8.32078C14.7848 8.84978 15.5658 9.70701 16 10.7467L16 10.7467C16.4342 9.70701 17.2152 8.84979 18.21 8.32078C19.2049 7.79178 20.3522 7.62366 21.457 7.84501C22.5618 8.06635 23.5558 8.6635 24.2701 9.53492C24.9844 10.4063 25.3748 11.4983 25.375 12.625C25.375 19 16 24.25 16 24.25Z" stroke="${storyItem.color.regular}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
              hidden={!storyData.link}
              onClick={() =>
                figma.showUI(
                  `<script>window.open('${storyData.link}','_blank');</script>`,
                  { visible: false }
                )
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
          hidden={!storyData.tags || storyData.tags.length === 0}
          width="fill-parent"
          height="hug-contents"
          spacing={s.xxs}
        >
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
