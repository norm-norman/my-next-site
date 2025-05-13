import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
// mui imports
import useMediaQuery from '@mui/material/useMediaQuery';

type InitialPropTypes = {
  hideFooter: boolean;
};

export const getServerSideProps: GetServerSideProps<
  InitialPropTypes
> = async () => {
  return {
    props: { hideFooter: true },
  };
};

export default function OfficeHours({
  hideFooter,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const calendarUri = process.env.CALENDAR_IFRAME_SRC || '';

  const isLargeScreen = useMediaQuery('(min-width:915px)');

  return (
    <div style={{ paddingTop: '10px' }}>
      <iframe
        src={calendarUri}
        style={{ borderWidth: 0 }}
        width={isLargeScreen ? '800' : '100%'}
        height="600"
        scrolling="no"
      ></iframe>
    </div>
  );
}
