import React from "react";
import { useSelector } from "react-redux";
import CustomStickyHeaderTable from "../../components/Tables/CustomTable";
import orderBy from "../../utility/SortUtility";

const columns = [
  { title: "Name", key: "name" },
  { title: "Date", key: "date" },
  { title: "Score", key: "score" },
];

const UserList = () => {
  const { users } = useSelector((state) => state.users);

  return (
    <CustomStickyHeaderTable
      columns={columns}
      data={[...users]
        .sort(orderBy("score"))
        .sort(orderBy("date"))
        .sort(orderBy("name"))}
      hasRowCounter
      rowCounterTitle="Rank"
    />
  );
};

export default UserList;
