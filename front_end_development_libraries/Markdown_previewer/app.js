$(document).ready(function() {
  const editor = $("#editor");
  const preview = $("#preview");

  let markdown = "# Welcome to the markdown previewer... \n# Header (H1)\n\n## Subheader (H2)\n\n[Link](https://www.example.com)\n\nInline code: `console.log('Hello World!')`\n\nCode block:\n```\nfunction greet() {\n  console.log('Hello World!');\n}\n```\n\n- List item 1\n- List item 2\n\n> Blockquote\n\n![Image Alt Text](https://picsum.photos/200)\n\n**Bolded Text**";

  editor.val(markdown);
  preview.html(marked(markdown, { breaks: true }));

  editor.on("keyup", function() {
    var markdown = editor.val();
    var html = marked(markdown, { breaks: true });
    preview.html(html);
  });
});
