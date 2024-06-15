import React from "react";
import classNames from "classnames";
import { Badge } from "@/components/ui/badge";

type PopularTagsProps = {
  tags: string[];
  selectedTags: string[];
  onChange: (tags: string[]) => void;
};

const PopularTags: React.FC<PopularTagsProps> = ({
  tags,
  selectedTags,
  onChange,
}) => {
  const handleTagChange = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="p-4 border rounded">
      <h3 className="mb-2 font-normal">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          //   <span
          // key={tag}
          // className={classNames(
          //   "cursor-pointer px-3 py-1 border rounded-sm",
          //   {
          //     "bg-blue-500 text-white": selectedTags.includes(tag),
          //     "bg-gray-200 text-gray-800": !selectedTags.includes(tag),
          //   }
          // )}
          // onClick={() => handleTagChange(tag)}
          //   >
          //     {tag}
          //   </span>
          // ))}

          <Badge
            variant="outline"
            key={tag}
            className={classNames(
              "cursor-pointer px-3 py-1 border rounded-sm",
              {
                "bg-blue-500 text-white": selectedTags.includes(tag),
                "bg-gray-200 text-gray-800": !selectedTags.includes(tag),
              }
            )}
            onClick={() => handleTagChange(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
