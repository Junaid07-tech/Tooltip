import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicUsageCode = `
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button/Button";

<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`;

  const positionsCode = `
<Tooltip content="Tooltip on top" position="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Tooltip on bottom" position="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Tooltip on left" position="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Tooltip on right" position="right">
  <Button>Right</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "—",
      description: "The content displayed inside the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Controls the position of the tooltip",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes for the tooltip",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Header */ }
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>

        <p className="text-lg text-gray-600">
          Displays additional information when the user hovers over an element.
        </p>
      </header>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          <div className="flex items-center justify-center py-10">
            <Tooltip content="This is a tooltip">
              <Button>Hover me</Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* Positions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Positions</h2>

        <ComponentDemo code={positionsCode}>
          <div className="flex items-center justify-center gap-6 flex-wrap py-16">
            <Tooltip content="Tooltip on top" position="top">
              <Button>Top</Button>
            </Tooltip>

            <Tooltip content="Tooltip on bottom" position="bottom">
              <Button>Bottom</Button>
            </Tooltip>

            <Tooltip content="Tooltip on left" position="left">
              <Button>Left</Button>
            </Tooltip>

            <Tooltip content="Tooltip on right" position="right">
              <Button>Right</Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;