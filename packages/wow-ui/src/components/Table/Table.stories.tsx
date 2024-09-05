import type { Meta, StoryObj } from "@storybook/react";

import PaginationTable from "@/components/Table/PaginationTable";
import Table from "@/components/Table/Table";
import TableBodyContainer from "@/components/Table/TableBodyContainer";
import TableCell from "@/components/Table/TableCell";
import TableContainer from "@/components/Table/TableContainer";
import TableHeader from "@/components/Table/TableHeader";
import TableHeaderContainer from "@/components/Table/TableHeaderContainer";
import TableRow from "@/components/Table/TableRow";

const meta = {
  title: "UI/Table",
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "테이블 컴포넌트",
  },
  argTypes: {
    defaultChecked: {
      description: "스위치가 처음에 활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "스위치가 비활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    checked: {
      description: "외부에서 제어할 활성 상태를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "스위치 오른쪽에 들어갈 텍스트입니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onClick: {
      description: "스위치를 클릭했을 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onKeyDown: {
      description:
        "스위치가 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onMouseEnter: {
      description: "마우스가 스위치 위로 진입할 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onMouseLeave: {
      description: "마우스가 스위치에서 벗어날 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    inputProps: {
      description:
        "스위치의 기본 input 요소에 전달할 추가 속성들을 나타냅니다.",
      table: {
        type: { summary: "InputHTMLAttributes<HTMLInputElement>" },
        defaultValue: { summary: "{}" },
      },
      control: false,
    },
    style: {
      description: "스위치의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: false,
    },
    className: {
      description: "스위치에 전달하는 커스텀 클래스를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const data = [
      { id: 1, name: "김유진", studyId: "C035087", birth: "2000" },
      { id: 2, name: "강해린", studyId: "C011111", birth: "2006" },
      { id: 3, name: "김민지", studyId: "C234567", birth: "2004" },
    ];
    return (
      <PaginationTable
        data={data}
        tableResource={[
          { valueKey: "name", valueText: "이름" },
          { valueKey: "studyId", valueText: "학번" },
        ]}
      />
    );
  },
};

export const CheckableTable: Story = {
  render: () => {
    return (
      <TableContainer>
        <Table variant="checkable">
          <TableHeaderContainer>
            <TableRow>
              <TableHeader>학번</TableHeader>
              <TableHeader>이름</TableHeader>
              <TableHeader>전화번호</TableHeader>
            </TableRow>
          </TableHeaderContainer>
          <TableBodyContainer>
            <TableRow>
              <TableCell>C000000</TableCell>
              <TableCell>가나다</TableCell>
              <TableCell>0100000000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C000000</TableCell>
              <TableCell>가나다</TableCell>
              <TableCell>0100000000</TableCell>
            </TableRow>
          </TableBodyContainer>
        </Table>
      </TableContainer>
    );
  },
};
