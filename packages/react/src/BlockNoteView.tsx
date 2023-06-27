import { BlockNoteEditor, BlockSchema } from "@blocknote/core";
import { Remirror } from "@remirror/react";
// import { BlockNoteTheme } from "./BlockNoteTheme";
// import { MantineProvider } from "@mantine/core";

export function BlockNoteView<BSchema extends BlockSchema>(props: {
  editor: BlockNoteEditor<BSchema> | null;
}) {
  return (
    // TODO: Should we wrap editor in MantineProvider? Otherwise we have to duplicate color hex values.
    // <MantineProvider theme={BlockNoteTheme}>
    // <EditorContent editor={props.editor?._tiptapEditor || null} />
    <Remirror manager={props.editor!._manager}/>
    // </MantineProvider>
  );
}
