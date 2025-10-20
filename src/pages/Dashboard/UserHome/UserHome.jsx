import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <div>
                <h1>
                    <span className="text-3xl text-black mr-3">Well Come</span>
                    {
                        user?.displayName ? user.dislayName : 'Back'
                    }
                </h1>
            </div>
        </div>
    );
};

export default UserHome;