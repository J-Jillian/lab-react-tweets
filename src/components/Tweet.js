
import User from './User.js';
import Timestamp from './Timestamp.js';
import ProfileImage from './ProfileImage.js';
import Message from './Message.js';
import Actions from './Actions.js';

function Tweet({tweet}) {
return (

<div className="tweet">
<ProfileImage image={tweet.user.image} />

<div className="body">
<div className="top">
<User userData={tweet.user} />
<Timestamp tweet={tweet.timestamp} />
</div>

<Message message={tweet.message} />
<Actions />
</div>

<i className="fas fa-ellipsis-h"></i>

</div>

);
}

export default Tweet;
