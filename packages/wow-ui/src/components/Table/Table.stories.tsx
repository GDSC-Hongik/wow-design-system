import type { Meta, StoryObj } from "@storybook/react";
import { styled } from "@styled-system/jsx";
import { useState } from "react";

import Button from "@/components/Button";
import Table from "@/components/Table/Table";

const meta = {
  title: "UI/Table",
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "테이블 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    data: {
      description: "테이블 컴포넌트에 나타낼 데이터의 배열입니다.",
      table: {
        type: { summary: "T[]" },
      },
    },
    tableHeaderResource: {
      description:
        "테이블 헤더에 나타낼 배열과 데이터의 키 값을 담은 배열입니다.",
      table: {
        type: { summary: "{ key: keyof T; text: string }[]" },
      },
    },
    tableCaption: {
      description: "테이블에 대한 설명을 나타내는 캡션입니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    options: {
      description: "테이블에 대한 상세한 옵션값을 설정합니다.",
      table: {
        type: { summary: "TableOptionProps<T>" },
      },
      control: {
        type: "object",
      },
    },
    selectedRows: {
      description:
        "default 값을 설정하거나, 외부에서 table의 체크 상태 관리할 수 있는 변수입니다.",
      table: {
        type: { summary: "T[]" },
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출되는 함수입니다.",
      table: {
        type: { summary: "(selectedRows: T[]) => void" },
      },
    },
    className: {
      description: "테이블 컴포넌트에게 전달할 className을 정의합니다.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    fullWidth: {
      description: "테이블 컴포넌트의 가로 길이를 결정할 수 있습니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    style: {
      description: "테이블 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: false,
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
      <Table
        data={data}
        tableHeaderResource={[
          { key: "name", text: "이름" },
          { key: "studyId", text: "학번" },
        ]}
      />
    );
  },
};

export const CheckableTable: Story = {
  render: () => {
    const data = [
      {
        id: 1,
        name: "김유진",
        studyId: "C035087",
        birth: "2000",
        discordname: "eugene028",
        button: (
          <styled.div alignItems="center" display="flex" gap="8px">
            <Button size="sm" variant="outline">
              삭제
            </Button>
            <Button size="sm">등록</Button>
          </styled.div>
        ),
      },
      {
        id: 2,
        name: "강해린",
        discordname: "haerin111",
        studyId: "C011111",
        birth: "2006",
        button: (
          <styled.div alignItems="center" display="flex" gap="8px">
            <Button size="sm" variant="outline">
              삭제
            </Button>
            <Button size="sm">등록</Button>
          </styled.div>
        ),
      },
      {
        id: 3,
        name: "김민지",
        studyId: "C234567",
        discordname: "minijjang",
        birth: "2004",
        button: (
          <styled.div alignItems="center" display="flex" gap="8px">
            <Button size="sm" variant="outline">
              삭제
            </Button>
            <Button size="sm">등록</Button>
          </styled.div>
        ),
      },
    ];
    return (
      <Table
        data={data}
        fullWidth={true}
        options={{
          showCheckbox: true,
          uniqueKey: "id",
        }}
        tableHeaderResource={[
          { key: "name", text: "이름" },
          { key: "studyId", text: "학번" },
          { key: "discordname", text: "디스코드 닉네임" },
          { key: "button", text: "버튼" },
        ]}
      />
    );
  },
};

const ControlledTable = () => {
  const selectedProps = [
    {
      id: 3,
      name: "김민지",
      studyId: "C234567",
      discordname: "minijjang",
      birth: "2004",
    },
    {
      id: 2,
      name: "강해린",
      discordname: "haerin111",
      studyId: "C011111",
      birth: "2006",
    },
  ];
  const [selectedRows, setSelectedRows] = useState<object[]>(selectedProps);
  const data = [
    {
      id: 1,
      name: "김유진",
      studyId: "C035087",
      birth: "2000",
      discordname: "eugene028",
    },
    {
      id: 2,
      name: "강해린",
      discordname: "haerin111",
      studyId: "C011111",
      birth: "2006",
    },
    {
      id: 3,
      name: "김민지",
      studyId: "C234567",
      discordname: "minijjang",
      birth: "2004",
    },
  ];
  const handleSelectionChange = (rows: object[]) => {
    setSelectedRows(rows);
  };
  return (
    <>
      <Button
        size="sm"
        style={{ marginBottom: "20px" }}
        onClick={() => {
          setSelectedRows([]);
        }}
      >
        선택한 테이블 요소 모두 초기화
      </Button>
      <Table
        data={data}
        fullWidth={true}
        selectedRows={selectedRows}
        options={{
          showCheckbox: true,
          uniqueKey: "id",
        }}
        tableHeaderResource={[
          { key: "name", text: "이름" },
          { key: "studyId", text: "학번" },
          { key: "discordname", text: "디스코드 닉네임" },
        ]}
        onChange={handleSelectionChange}
      />
    </>
  );
};

export const ControlledTableState: Story = {
  render: () => <ControlledTable />,
};
