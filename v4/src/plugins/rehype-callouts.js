import { visit } from "unist-util-visit";

function rehypeCallouts() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (
        node.tagName === "blockquote" &&
        node.properties &&
        node.properties["data-callout-type"]
      ) {
        const calloutType = node.properties["data-callout-type"];

        // Transform the blockquote into a callout div
        node.tagName = "div";
        node.properties = {
          class: `callout callout-${calloutType} border-l-4 pl-4 py-2 my-4 ${
            calloutType === "info"
              ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
              : calloutType === "warning"
                ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20"
                : calloutType === "success"
                  ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                  : "border-red-500 bg-red-50 dark:bg-red-950/20"
          }`,
        };

        // Add the icon and wrapper div
        const iconDiv = {
          type: "element",
          tagName: "div",
          properties: {
            class: `flex-shrink-0 mt-0.5 ${
              calloutType === "info"
                ? "text-blue-600 dark:text-blue-400"
                : calloutType === "warning"
                  ? "text-yellow-600 dark:text-yellow-400"
                  : calloutType === "success"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
            }`,
          },
          children: [
            {
              type: "text",
              value:
                calloutType === "info"
                  ? "ℹ️"
                  : calloutType === "warning"
                    ? "⚠️"
                    : calloutType === "success"
                      ? "✅"
                      : "❌",
            },
          ],
        };

        const contentDiv = {
          type: "element",
          tagName: "div",
          properties: { class: "text-sm" },
          children: node.children,
        };

        const flexDiv = {
          type: "element",
          tagName: "div",
          properties: { class: "flex items-start gap-2" },
          children: [iconDiv, contentDiv],
        };

        node.children = [flexDiv];
      }
    });
  };
}

export default rehypeCallouts;
