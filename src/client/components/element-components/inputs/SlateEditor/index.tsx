import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import isHotkey from "is-hotkey";
import { Editable, withReact, useSlate, Slate, ReactEditor } from "slate-react";
import styled from "styled-components";
import {
  Editor,
  Transforms,
  Text,
  createEditor,
  Node,
  Element as SlateElement,
  Range,
} from "slate";
import { withHistory } from "slate-history";
import { Icon } from "../../../content-components";
import { Typography, Layout, Buttons } from "../../../index";



import { Styles } from "../../../../../site-config";
import store from "../../../../store";

const Container = styled.div`
  width: 90%;
  height: auto;
  resize: vertical;
  background: ${Styles.Colors.backgroundSecondary};
  padding: 1.5em 0;
`;

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const ALIGNMENT_TYPES = ["align-right", "align-left", "align-center"];

const RichTextExample = ({ accessor, page, defaultValue }) => {
  const [value, setValue] = useState<Node[]>(defaultValue);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);



  return (
    <Container>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => setValue(value)}
        style={{ minHeight: "15em" }}
      >
        <Layout.Flex>
          {/* <MarkButton helperText="Help" format="bold" icon="format_bold" />
          <MarkButton helperText="Help" format="italic" icon="format_italic" />
          <MarkButton
            helperText="Help"
            format="underline"
            icon="format_underlined"
          /> */}

          <BlockButton helperText="Help" format="heading-one" number={1} />
          <BlockButton helperText="Help" format="heading-two" number={2} />
          <BlockButton helperText="Help" format="heading-three" number={3} />
          <BlockButton helperText="Help" format="heading-four" number={4} />
          <BlockButton helperText="Help" format="heading-five" number={5} />
          <BlockButton helperText="Help" format="heading-six" number={6} />
          <BlockButton
            helperText="Help"
            format="block-quote"
            icon="format_quote"
          />
          <BlockButton
            helperText="Help"
            format="numbered-list"
            icon="format_list_numbered"
          />
          <BlockButton
            helperText="Help"
            format="bulleted-list"
            icon="format_list_bulleted"
          />
          <MarkButton
            helperText="Help"
            format="align-left"
            icon="format_align_left"
          />
          <MarkButton
            helperText="Help"
            format="align-center"
            icon="format_align_center"
          />
          <MarkButton
            helperText="Help"
            format="align-right"
            icon="format_align_right"
          />
        </Layout.Flex>
        <HoveringToolbar></HoveringToolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          style={{ minHeight: "5em", width: "100%", textAlign: "left" }}
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event as any)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </Slate>
      <Buttons.Button
        onClick={async () => {


          await store.defaultContentHandler({
            content: value,
            action: "SET",
            page,
            accessor,
          });
        }}
        disabled={false}
      >
        Save
      </Buttons.Button>
    </Container>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      LIST_TYPES.includes(
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type
      ),
    split: true,
  });
  const newProperties: Partial<SlateElement> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, color: "black", children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleAlignment = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  // if (!isActive && isList) {
  const block = { type: format, color: "black", children: [] };
  Transforms.wrapNodes(editor, block);
  // }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);


  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const toggleFormat = (editor, format) => {
  const isActive = isFormatActive(editor, format);
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  );
};

const isFormatActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n[format] === true,
    mode: "all",
  });
  return !!match;
};
const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return (
        <h1 variant="h1" {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 variant="h2" {...attributes}>
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3 variant="h3" {...attributes}>
          {children}
        </h3>
      );
    case "heading-four":
      return (
        <h4 variant="h4" {...attributes}>
          {children}
        </h4>
      );
    case "heading-five":
      return (
        <h5 variant="h5" {...attributes}>
          {children}
        </h5>
      );
    case "heading-six":
      return (
        <h6 variant="h6" {...attributes}>
          {children}
        </h6>
      );

    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "align-left":
      return (
        <div {...attributes} style={{ textAlign: "left" }}>
          {children}
        </div>
      );
    case "align-right":
      return (
        <div {...attributes} style={{ textAlign: "right" }}>
          {children}
        </div>
      );
    case "align-center":
      return (
        <div {...attributes} style={{ textAlign: "center" }}>
          {children}
        </div>
      );
    default:
      return (
        <span variant="p" {...attributes}>
          {children}
        </span>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return (
    <span variant="p" {...attributes}>
      {children}
    </span>
  );
};

const BlockButton = ({ format, icon, number, helperText }) => {
  const editor = useSlate();
  const active = isBlockActive(editor, format);

  const buttonTypeConfig = Boolean(icon)
    ? {
        iconConfig: {
          name: icon,
          color: active ? "black" : "lightGray",
          type: "icon",
        },
      }
    : {
        typographyConfig: {
          children: number,
          color: active ? "black" : "lightGray",
          padding: "0 .5em",
          weight: "bold",
        },
      };



  return (
    <Buttons.Editor
      helperText={helperText}
      active={active}
      margin="0 auto"
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
      {...buttonTypeConfig}
    ></Buttons.Editor>
  );
};

const MarkButton = ({ format, icon, helperText }) => {
  const editor = useSlate();
  const active = isBlockActive(editor, format);

  return (
    <Buttons.Editor
      helperText={helperText}
      active={active}
      margin="0 auto"
      onMouseDown={(event) => {
        event.preventDefault();
        toggleAlignment(editor, format);
      }}
      iconConfig={{
        name: icon,
        color: active ? "black" : "lightGray",
        type: "icon",
      }}
    ></Buttons.Editor>
  );
};

const FormatButton = ({ format, icon, helperText }) => {
  const editor = useSlate();

  const isActive = isFormatActive(editor, format);

  return (
    <Buttons.Editor
      helperText={helperText}
      active={isActive}
      margin="0 auto"
      onMouseDown={(event) => {
        event.preventDefault();
        toggleFormat(editor, format);
      }}
      iconConfig={{
        name: icon,
        color: isActive ? "black" : "lightGray",
        type: "icon",
      }}
    ></Buttons.Editor>
  );
};



const HoveringToolbar = () => {
  const ref = useRef<HTMLDivElement | null>();
  const editor = useSlate();

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style");
      return;
    }

    const domSelection = global.window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = "1";
    el.style.top = `${
      rect.top + global.window.pageYOffset - el.offsetHeight
    }px`;
    el.style.left = `${
      rect.left +
      global.window.pageXOffset -
      el.offsetWidth / 2 +
      rect.width / 2
    }px`;
  });

  return (
    <Portal>
      <ToolbarContainer yAlign="center" ref={ref}>
        <FormatButton format="bold" icon="format_bold" />
        <FormatButton format="italic" icon="format_italic" />
        <FormatButton format="underline" icon="format_underlined" />
      </ToolbarContainer>
    </Portal>
  );
};

const Portal = ({ children }) => {
  return typeof document === "object"
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

const ToolbarContainerVessel = styled.div`
  padding: 0.2em;
  position: absolute;
  z-index: 1;
  top: -10000px;
  left: -10000px;
  margin-top: -6px;
  opacity: 0;
  background-color: #222;
  border-radius: 4px;
  transition: opacity 0.75s;
`;

const ToolbarContainer = React.forwardRef((props, ref) => (
  <ToolbarContainerVessel {...props} ref={ref} />
));

export default RichTextExample;
