function ProfileCard({ title, handle }) { //optional using ProfileCard(props)
    // const title = props.title;
    // const handle = props.handle;
    // one handled line
    // const { title, handle } = props;

    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;