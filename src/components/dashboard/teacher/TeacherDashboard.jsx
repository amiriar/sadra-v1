import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TeacherDashbaord({ userId, userEmail, userRole }) {

    return (
        <div>
            <h1>
                {userId}
            </h1>
            <h1>
                {userEmail}
            </h1>
            <h1>
                {userRole}
            </h1>
        </div>
    );
}

export default TeacherDashbaord