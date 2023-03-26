import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({filter, setFilter}) => {
    return (
      <div>
        <Input
          placeholder="search"

          value={filter.searchStr}
          onChange={(e) => setFilter({ ...filter, searchStr: e.target.value })}
        />

        <Select
          value={filter.sortBy}
          onChange={(selectedSort) => setFilter({ ...filter, sortBy: selectedSort })}
          defaultValue="Sort by"
          options={[
            { value: 'title', name: 'by name' },
            { value: 'body', name: 'by desc' },
          ]}
        />
      </div>
    );
};

export default PostFilter;