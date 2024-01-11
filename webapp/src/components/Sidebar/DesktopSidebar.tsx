import Filter from '../Filter';
import './styles.css';

const DesktopSidebar = () => {

    return (
        <div className="container">
            <div className="profile-developer">
                <h5 className="card-title">Hello Desktop</h5>
                <p className="card-text">This is a desktop card.</p>
            </div>
            <div className="filter">
                <span>Filter</span>
                <Filter />
            </div>
        </div>
    );
}

export default DesktopSidebar;