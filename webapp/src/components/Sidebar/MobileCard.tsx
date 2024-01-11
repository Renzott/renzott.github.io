import { useState } from "react";
import Filter from "../Filter";
import InfoDeveloper from "../InfoDeveloper";

const MobileCard = () => {

    // state switch between filter and info developer
    const [switchState, setSwitchState] = useState(false);

    return (
        <div>
            <button onClick={() => setSwitchState(!switchState)}>Switch</button>
            {switchState ? <Filter /> : <InfoDeveloper />}
        </div>
    );
}

export default MobileCard;