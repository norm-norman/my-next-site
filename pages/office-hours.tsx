export default function OfficeHours() {
  const calendarUri = process.env.CALENDAR_IFRAME_SRC || '';

  return (
    <div style={{ paddingTop: '150px' }}>
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
