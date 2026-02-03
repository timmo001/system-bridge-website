import { visit } from "unist-util-visit";

function remarkCallouts() {
  return (tree) => {
    visit(tree, "blockquote", (node) => {
      if (node.children && node.children.length > 0) {
        const firstChild = node.children[0];
        if (
          firstChild.type === "paragraph" &&
          firstChild.children &&
          firstChild.children.length > 0
        ) {
          const textNode = firstChild.children[0];
          if (textNode.type === "text") {
            const match = textNode.value.match(
              /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/,
            );
            if (match) {
              const type = match[1].toLowerCase();
              const calloutType =
                type === "caution"
                  ? "error"
                  : type === "tip"
                    ? "success"
                    : type === "note" || type === "important"
                      ? "info"
                      : "warning";

              // Remove the alert syntax from the text
              textNode.value = textNode.value.replace(
                /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,
                "",
              );

              // Add data attribute to the blockquote for later processing
              node.data = node.data || {};
              node.data.hProperties = node.data.hProperties || {};
              node.data.hProperties["data-callout-type"] = calloutType;
            }
          }
        }
      }
    });
  };
}

export default remarkCallouts;
