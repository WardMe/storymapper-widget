import {
  Button,
  Container,
  Columns,
  Divider,
  Inline,
  render,
  Stack,
  Text,
  Textbox,
  TextboxMultiline,
  TextboxNumeric,
  useInitialFocus,
  VerticalSpace,
  MiddleAlign,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h, JSX } from "preact";
import { useEffect, useCallback, useState } from "preact/hooks";
import { StoryData } from "./storyData";

function Plugin(props: { storyData: StoryData }) {
  const [storyData, setStoryData] = useState(props.storyData);

  const [title, setTitle] = useState(props.storyData.title);
  const [date, setDate] = useState(props.storyData.date);
  const [description, setDescription] = useState(props.storyData.description);
  const [link, setLink] = useState(props.storyData.link);
  const [tags, setTags] = useState(props.storyData.tags?.join(",")); // Convert array to string
  const [userImpact, setUserImpact] = useState(props.storyData.userImpact);
  const [userValue, setUserValue] = useState(props.storyData.userValue);
  const [usability, setUsability] = useState(props.storyData.usability);
  const [ethicality, setEthicality] = useState(props.storyData.ethicality);
  const [feasability, setFeasability] = useState(props.storyData.feasability);
  const [viability, setViability] = useState(props.storyData.viability);
  const [score, setScore] = useState(props.storyData.score);

  const handleDate = (event: JSX.TargetedEvent<HTMLInputElement>) => {
    setDate(event.currentTarget.value);
  };

  const handleSubmit = () => {
    storyData.title = title;
    storyData.description = description;
    storyData.link = link;
    storyData.date = date;
    // Clean up the tags
    storyData.tags = tags
      ?.split(",")
      .map((t) => t.trim())
      .filter((n) => n !== "");

    // Calculate the score
    storyData.userImpact = Number(userImpact);
    storyData.userValue = Number(userValue);
    storyData.usability = Number(usability);
    storyData.ethicality = Number(ethicality);
    storyData.feasability = Number(feasability);
    storyData.viability = Number(viability);
    // One of the scores is set, so we display at least 0
    let calculatedScore = "";
    if (
      storyData.userValue ||
      storyData.usability ||
      storyData.ethicality ||
      storyData.feasability ||
      storyData.viability
    ) {
      calculatedScore = (
        storyData.userImpact +
        storyData.userValue +
        storyData.usability +
        storyData.ethicality +
        storyData.feasability +
        storyData.viability
      ).toString();
    }
    setScore(calculatedScore);
    storyData.score = calculatedScore;

    setStoryData(storyData);
    emit("UPDATE_STORY_ITEM", storyData);
  };

  const handleUserKeyPress = (event: KeyboardEvent) => {
    if (
      event.key === "Enter" &&
      (event.target as Element).nodeName !== "TEXTAREA"
    ) {
      handleSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <Container>
      <VerticalSpace space="small" />
      <Stack style={{ paddingBottom: "80px" }}>
        <Text bold>Story item details</Text>
        <label>
          Title:
          <Textbox
            {...useInitialFocus()}
            onValueInput={setTitle}
            name="title"
            value={title}
            placeholder="Story item title"
          />
        </label>
        <label>
          Description:
          <TextboxMultiline
            onValueInput={setDescription}
            name="description"
            value={description as string}
            placeholder="Extra information about the story item"
          />
        </label>
        <label>
          External link:
          <Textbox
            onValueInput={setLink}
            name="link"
            value={link as string}
            placeholder="https://www.yoururlhere.com"
          />
        </label>
        <label>
          Tags (Comma separated):
          <Textbox
            onValueInput={setTags}
            name="tags"
            value={tags as string}
            placeholder="Comma separated list of tags"
          />
        </label>
        <Inline space="small" style={{ verticalAlign: "middle" }}>
          <label htmlFor="date">Add a date:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={date}
            onInput={handleDate}
            style={{ marginLeft: "8px" }}
          />
        </Inline>
        <VerticalSpace space="small" />
        <Text bold>Score your story item:</Text>
        <Inline space="small">
          <TextboxNumeric
            id="userImpact"
            onValueInput={setUserImpact}
            value={userImpact as string}
            placeholder="0 - 100"
            minimum={0}
            maximum={100}
            integer
            style={{ maxWidth: "40px" }}
          />
          <label htmlFor="userImpact">% of users that are impacted?</label>
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            id="userValue"
            onValueInput={setUserValue}
            value={userValue as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{ maxWidth: "40px" }}
          />
          <label htmlFor="userValue">User value, how big is this need?</label>
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            id="usability"
            onValueInput={setUsability}
            value={usability as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{ maxWidth: "40px" }}
          />
          <label htmlFor="usability">Usability, how easy is it to use?</label>
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            id="ethicality"
            onValueInput={setEthicality}
            value={ethicality as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{ maxWidth: "40px" }}
          />
          <label htmlFor="ethicality">
            Ethicality, are we causing harm or doing good?
          </label>
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            id="feasability"
            onValueInput={setFeasability}
            value={feasability as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{ maxWidth: "40px" }}
          />
          <label htmlFor="feasability">
            Feasability, do we currently have the time, skills, …?
          </label>
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            id="viability"
            onValueInput={setViability}
            value={viability as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{ maxWidth: "40px" }}
          />
          <label htmlFor="viability">
            Viability, how much does it help reaching our objective(s)?
          </label>
        </Inline>
      </Stack>

      <Stack
        style={{
          padding: "1rem",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#FFF",
          borderTop: "1px solid #CCC",
          zIndex: 100,
        }}
      >
        <Button fullWidth onClick={handleSubmit}>
          Update Story Item
        </Button>
      </Stack>
    </Container>
  );
}

export default render(Plugin);
