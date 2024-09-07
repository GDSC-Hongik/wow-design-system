import type { Meta, StoryObj } from "@storybook/react";
import { styled } from "@styled-system/jsx";
import { useState } from "react";

import Button from "@/components/Button";
import Pagination from "@/components/Pagination";
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

export const ScrollTable: Story = {
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
        style={{ maxWidth: "400px", maxHeight: "180px" }}
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

const TableWithPaginationComponent = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handleSelectionChange = (page: number) => {
    setSelectedPage(page);
  };

  const data = [
    { id: 1, name: "김유진", studyId: "C035087", birth: "2000" },
    { id: 2, name: "이영지", studyId: "C023456", birth: "2001" },
    { id: 3, name: "모다니", studyId: "C045678", birth: "2005" },
    { id: 4, name: "민지", studyId: "C122222", birth: "2004" },
    { id: 5, name: "하니", studyId: "C133333", birth: "2004" },
    { id: 6, name: "다니엘", studyId: "C144444", birth: "2005" },
    { id: 7, name: "해린", studyId: "C155555", birth: "2006" },
    { id: 8, name: "혜인", studyId: "C166666", birth: "2008" },
    { id: 9, name: "카리나", studyId: "C177777", birth: "2000" },
    { id: 10, name: "윈터", studyId: "C188888", birth: "2001" },
    { id: 11, name: "지젤", studyId: "C199999", birth: "2000" },
    { id: 12, name: "이서", studyId: "C200000", birth: "2007" },
    { id: 13, name: "장원영", studyId: "C211111", birth: "2004" },
    { id: 14, name: "안유진", studyId: "C222222", birth: "2003" },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (selectedPage - 1) * itemsPerPage,
    selectedPage * itemsPerPage
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Table
        data={currentData}
        tableHeaderResource={[
          { key: "name", text: "이름" },
          { key: "studyId", text: "학번" },
          { key: "birth", text: "생년월일" },
        ]}
      />
      <Pagination
        currentPage={selectedPage}
        totalPages={totalPages}
        onChange={handleSelectionChange}
      />
    </div>
  );
};

export const TableWithPagination: Story = {
  render: () => <TableWithPaginationComponent />,
};
