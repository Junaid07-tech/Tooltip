import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const basicUsageCode = `
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button/Button";

<Layout gap="md" align="center">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Layout>`;

  const columnUsageCode = `
<Layout direction="column" gap="lg" align="center">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Layout>`;

  const propsData = [
    {
      prop: "direction",
      type: '"row" | "column"',
      default: '"row"',
      description: "Controls the direction of the layout",
    },
    {
      prop: "gap",
      type: '"none" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Controls the spacing between children",
    },
    {
      prop: "align",
      type: '"start" | "center" | "end" | "stretch"',
      default: '"stretch"',
      description: "Controls cross-axis alignment",
    },
    {
      prop: "justify",
      type: '"start" | "center" | "end" | "between" | "around"',
      default: '"start"',
      description: "Controls main-axis positioning",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Layout
        </p>

        <p className="text-lg text-gray-600">
          A flexible layout component for arranging content with direction,
          spacing, alignment, and positioning.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          <Layout gap="md" align="center">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Layout>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Column Layout</h2>

        <ComponentDemo code={columnUsageCode}>
          <Layout direction="column" gap="lg" align="center">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Layout>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;