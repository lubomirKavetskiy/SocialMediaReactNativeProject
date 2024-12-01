import {useEffect, useState} from 'react';

const paginate = (data, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return startIndex >= data.length ? [] : data.slice(startIndex, endIndex);
};

const useGetRenderedData = ({
  initialUserDataCurrentPage,
  userDataPageSize,
  userData,
}) => {
  const [userDataCurrentPage, setUserDataCurrentPage] = useState(
    initialUserDataCurrentPage,
  );
  const [userRenderedData, setUserRenderedData] = useState([]);
  const [isLoadingUserData, setIsLoadingUserData] = useState(false);

  useEffect(() => {
    setIsLoadingUserData(true);

    const initialUserStories = paginate(
      userData,
      initialUserDataCurrentPage,
      userDataPageSize,
    );

    setUserRenderedData(initialUserStories);
    setIsLoadingUserData(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMoreData = () => {
    if (isLoadingUserData) return;

    setIsLoadingUserData(true);

    const contentToAppend = paginate(
      userData,
      userDataCurrentPage + 1, // it's a next (new) page
      userDataPageSize,
    );

    if (contentToAppend.length > 0) {
      setUserDataCurrentPage(prevPage => prevPage + 1);
      setUserRenderedData(prevData => [...prevData, ...contentToAppend]);
    }

    setIsLoadingUserData(false);
  };

  return {
    userRenderedData,
    handleLoadMoreData,
  };
};

export default useGetRenderedData;
