import CardHomeTaiLieu from "./CardHomeTaiLieu";

export default function GridCard() {
  return (
<div className="grid grid-cols-2 gap-6">
      <CardHomeTaiLieu checked={true} content="Tài liệu đào tạo kỹ năng ứng dụng AI cho Lãnh đạo cấp Vụ" />
      <CardHomeTaiLieu  checked={true} content="Tài liệu đào tạo kỹ năng ứng dụng AI cho Lãnh đạo cấp Vụ" />
      <CardHomeTaiLieu  content="Tài liệu đào tạo kỹ năng ứng dụng AI cho Lãnh đạo cấp Vụ" />
      <CardHomeTaiLieu content="Tài liệu đào tạo kỹ năng ứng dụng AI cho Lãnh đạo cấp Vụ" />
    </div>
  );
}
