import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

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

  return (
    <div style={{ paddingTop: '10px' }}>
      <iframe
        src={calendarUri}
        style={{ borderWidth: 0 }}
        width="800"
        height="600"
        scrolling="no"
      ></iframe>
    </div>
  );
}
