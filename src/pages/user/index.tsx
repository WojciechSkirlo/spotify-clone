import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Banner from '~~/Banner';

const UserPage = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useSWR<User>(`/users/${userId}`);

  if (isLoading) return <>Loading...</>;
  if (error || data === undefined) return <>Error :/</>;

  return (
    <Banner title={data.display_name} type={data.type} image={data.images?.[1]?.url}>
      <span>{data.followers.total} obserwujących</span>
    </Banner>
  );
};

export default UserPage;
