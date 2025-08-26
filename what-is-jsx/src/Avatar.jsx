function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    const today = new Date();
    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            color: 'pink'
        }
    };
    return (
        <div style={person.theme}>
            <h1>
                His is name {description} and today is a {formatDate(today)} so you'd better watch your back.
            </h1>
            <img
            className="avatar"
            src={avatar}
            alt={description}
            />
            <p>
                {description}<br />{description}<br />
                {/* 
                <ul style={{
                    backgroundColor: 'black',
                    color: 'pink',
                    width: '200px'
                }}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

                */}
            </p>
        </div>
    );
}