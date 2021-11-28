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
import { useCallback, useState } from "preact/hooks";
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

  const handleUpdateButtonClick = () => {
      storyData.title = title;
      storyData.description = description;
      storyData.link = link;
      // Clean up the tags
      storyData.tags = tags?.split(",").map((t) => t.trim()).filter(n => n !== "");

      // Calculate the score
      storyData.userImpact = Number(userImpact);
      storyData.userValue = Number(userValue);
      storyData.usability = Number(usability)
      storyData.ethicality = Number(ethicality);
      storyData.feasability = Number(feasability);
      storyData.viability = Number(viability);
      // One of the scores is set, so we display at least 0
      let calculatedScore = ""
      if(storyData.userValue || storyData.usability || storyData.ethicality || storyData.feasability || storyData.viability) {
        calculatedScore = (storyData.userImpact + storyData.userValue + storyData.usability + storyData.ethicality + storyData.feasability + storyData.viability).toString();
      }
      setScore(calculatedScore)
      storyData.score = calculatedScore;

      setStoryData(storyData);
      emit("UPDATE_STORY_ITEM", storyData);
    };

  return (
    <Container>
      <VerticalSpace space="small" />
      <Stack>
        <Text bold>Story item details</Text>
        <Text>Title:</Text>
        <Textbox
          {...useInitialFocus()}
          onValueInput={setTitle}
          name="title"
          value={title}
          placeholder="Story item title"
        />
        <Text>Description:</Text>
        <TextboxMultiline
          onValueInput={setDescription}
          name="description"
          value={description as string}
          placeholder="Extra information about the story item"
        />
        <Text>External link:</Text>
        <Textbox
          onValueInput={setLink}
          name="link"
          value={link as string}
          placeholder="https://www.yoururlhere.com"
        />
        <Text>Tags (Comma separated):</Text>
        <Textbox
          onValueInput={setTags}
          name="tags"
          value={tags as string}
          placeholder="Comma separated list of tags"
        />
        <VerticalSpace space="small" />
        <Text bold>Score your story item:</Text>
        <Inline space="small">
          <TextboxNumeric
            onValueInput={setUserImpact}
            value={userImpact as string}
            placeholder="0 - 100"
            minimum={0}
            maximum={100}
            integer
            style={{maxWidth:"40px"}}
          />
          % of users that are impacted?
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            onValueInput={setUserValue}
            value={userValue as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{maxWidth:"40px"}}
          />
          User value, how big is this need?
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            onValueInput={setUsability}
            value={usability as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{maxWidth:"40px"}}
          />
          Usability, how easy is it to use?
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            onValueInput={setEthicality}
            value={ethicality as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{maxWidth:"40px"}}
          />
          Ethicality, are we causing harm or doing good?
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            onValueInput={setFeasability}
            value={feasability as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{maxWidth:"40px"}}
          />
          Feasability, do we currently have the time, skills, …?
        </Inline>
        <Inline space="small">
          <TextboxNumeric
            onValueInput={setViability}
            value={viability as string}
            placeholder="0 - 10"
            minimum={0}
            maximum={10}
            integer
            style={{maxWidth:"40px"}}
          />
          Viability, how much does it help reaching our objective(s)?
        </Inline>
        <Button fullWidth onClick={handleUpdateButtonClick}>
          Update Story Item
        </Button>
      </Stack>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
