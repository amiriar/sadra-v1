import React, { useEffect, useState } from 'react'
import NewClass from './NewClass'
import { Divider } from '@mui/material'
import { categories } from '../Categories'
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOutButton'
import axios from 'axios'
import ClassCard from '../../modules/classes/ClassCard'

function ClassList() {
    const [userRole, setUserRole] = useState(null);
    const [userId, setUserId] = useState(null);
    const [teacherBlog, setTeacherBlog] = useState('');
    
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    const [targetData, setTargetData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/dashboard/token', { withCredentials: true })
            .then(response => {
            const { role, id } = response.data;
            setUserRole(role);
            setUserId(id);
        })
        .catch(firstError => {
            console.error('First Request Error:', firstError.response ? firstError.response.data : firstError.message);
            setUserRole('error');
        });

        const fetchData = async () => {
            try {
                const responseToken = await axios.get('http://localhost:3001/classes/data');
                setData(responseToken.data);
                const responseToken2 = await axios.get(`http://localhost:3001/TeacherUsers/data/${userId}`);
                setUsers(await responseToken2.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    
// Get the teacher's information from the users state
    // const teacherInfo = users[0]; // Assuming there's only one user
    console.log(users[0]);

    // Filter the data array based on matching teacherFirstName and teacherLastName
    // const filteredData = data.filter(item => (
    // item.teacherFirstName === teacherInfo.teacherFirstName &&
    // item.teacherLastName === teacherInfo.teacherLastName
    // ));

    // console.log(filteredData);

    return (
        <>
        {
            userRole === 'teacher' ?
            <div dir='rtl' className='panelContainer'>
                <div className='userPanel' dir='rtl'> 
                    <div className='sideBarPanel'>
                        <div>
                            {
                                categories.map((item) => (
                                    <Link key={item.title} to={item.link}>{item.title}</Link>
                                ))
                            }
                        </div>
                            <div>
                                <SignOutButton/>
                            </div>
                    </div>
                    <div className='mainPanel'>
                        <div className='CardBoxContainer'>
                            {
                                data.slice(0 , 7).map((item)=> (
                                    <Link key={item.id} to={`/classes/${item.id}`}><ClassCard key={item.id} {...item} /></Link>
                                ))
                            }
                        </div>
                        <Divider/>
                        <div>
                            <NewClass/>
                        </div>
                    </div>
                </div>
            </div>
            :
            <h3>یک بار از حساب کاربری خود خارج شوید و دوباره وارد شوید.</h3>
        }
        </>
    )
}

export default ClassList