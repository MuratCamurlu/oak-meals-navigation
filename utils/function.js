import CategoryTitle from "../components/CategoryTitle";

const renderCategoriesItem = (category) => {
  return (
    <CategoryTitle title={category.item.title} color={category.item.color} />
  );
};

export default renderCategoriesItem;
