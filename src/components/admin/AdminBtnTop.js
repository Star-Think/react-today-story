import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonItem from "../common/ButtonItem";

const AdminBtnTop = ({ select, setSelect, setPage }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto flex flex-wrap justify-end mt-10">
      <p>
        <select
          name="public"
          className="select select-bordered select-primary w-full max-w-xs"
          id="id_public"
          value={select}
          onChange={(e) => {
            setPage(1);
            setSelect(e.target.value);
          }}>
          <option value="">전체</option>

          <option value="0">신고중</option>

          <option value="1">승인</option>
          <option value="2">미승인</option>
        </select>
      </p>
      <ButtonItem
        text={"신고 일기"}
        btnColor={"btn-primary"}
        btnIcon={"fa-pencil"}
        mx_2={"ml-2"}
        click={() => navigate("/admin/diary")}
      />
      <ButtonItem
        text={"신고 댓글"}
        btnColor={"btn-warning"}
        btnIcon={"fa-comment"}
        mx_2={"mx-2"}
        click={() => navigate("/admin/comment")}
      />

      <ButtonItem
        text={"신고 회원"}
        btnColor={"btn-info"}
        btnIcon={"fa-user"}
        click={() => navigate("/admin/user")}
      />
    </div>
  );
};

export default React.memo(AdminBtnTop);
