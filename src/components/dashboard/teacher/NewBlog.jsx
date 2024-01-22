import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { showToast } from '../../modules/AuthModules/Toastify'
import { ToastContainer } from 'react-toastify';
import InputContact from '../../modules/input/InputContact';
import { useDropzone } from 'react-dropzone';
import { Divider } from '@mui/material';
import moment from 'jalali-moment';

function NewBlog() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                // First request to get the user ID
                const responseToken = await axios.get('http://localhost:3001/dashboard/token', { withCredentials: true });
                const { id } = responseToken.data;
                console.log('User ID:', id);
    
                // Second request using the obtained user ID
                const responseFullDetail = await axios.get(`http://localhost:3001/fullDetail/${id}`);
                console.log('Full Detail Response:', responseFullDetail.data);
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
                setUserRole('error');
            }
        };
    
        fetchData(); // Call the function
    
    }, []); // Empty dependency array to ensure it runs only once when the component mounts
    
    

    const [userId, setUserId] = useState(null)

    const [imageData, setImageData] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [authorLastName, setAuthorLastName] = useState('');
    const [authorPicture, setAuthorPicture] = useState('');
    const [authorDescription, setAuthorDescription] = useState('');
    const [authorLinkedin, setAuthorLinkedin] = useState('');
    const [authorPinterest, setAuthorPinterest] = useState('');
    const [authorTwitterX, setAuthorTwitterX] = useState('');
    const [authorFacebook, setAuthorFacebook] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [detailsDescription1, setDetailsDescription1] = useState('');
    const [detailsDescription2, setDetailsDescription2] = useState('');
    const [detailsDescription3, setDetailsDescription3] = useState('');
    const [descriptionImage1, setDescriptionImage1] = useState('');
    const [descriptionImage2, setDescriptionImage2] = useState('');
    const [detailsDescription4, setDetailsDescription4] = useState('');
    const [detailsDescription5, setDetailsDescription5] = useState('');
    const [timeToRead, setTimeToRead] = useState('');

    const [fileName, setFileName] = useState('');

    const [imagePath, setImagePath] = useState('');

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImageData(file);
        setFileName(file.name); // Set the file name in state
    };
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    

    const handleSubmit = async (e) => {
        console.log(
            imageData, date, title, description, authorName, authorLastName, authorPicture, authorDescription, authorLinkedin, authorPinterest, authorTwitterX, authorFacebook, hashtags, detailsDescription1, detailsDescription2, detailsDescription3, descriptionImage1, descriptionImage2, detailsDescription4, detailsDescription5, timeToRead
        )
        e.preventDefault()

        if (!imageData) { 
            showToast('لطفاً یک تصویر را انتخاب کنید.', "error");
            return;
        }

        const formData = new FormData();
        formData.append('imageData', imageData);

        try {
            const response = await axios.post('http://localhost:3001/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            });
            setImagePath(await response.data.path)

            showToast('اطلاعات با موفقیت آپلود شد.', 'success');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود تصویر: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
        
        axios.post(`http://localhost:3001/dashboard/blogs/add`, {
            imageData: imagePath,
            date: moment().locale('fa').format('YYYY-MM-DD'),
            title: title,
            description: description,
            authorName: authorName,
            authorLastName: authorLastName,
            hashtags: hashtags,
            detailsDescription1: detailsDescription1,
            detailsDescription2: detailsDescription2,
            descriptionImage1: descriptionImage1,
            descriptionImage2: descriptionImage2,
            detailsDescription3: detailsDescription3,
            detailsDescription4: detailsDescription4,
            detailsDescription5: detailsDescription5,
            timeToRead: timeToRead
        })
            .then(response => {
                showToast("بلاگ جدید با موفقیت ثبت شد !", "success")
                console.log(response);
            })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
        });
    }


    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' className='newBlogForm'>
            
            <div {...getRootProps()} style={dropzoneStyle}>
                <input {...getInputProps()} />
                <p>تصویر مقاله را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد</p>
                <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                {fileName && (
                    <p style={{ marginTop: '10px' }}>
                    نام فایل انتخابی: {fileName}
                    </p>
                )}
            </div>
            <Divider/>
            <p>اطلاعات اصلی:</p>
            <InputContact id={'title'} setVariable={setTitle} variable={title} title={'عنوان مقاله'} type={'text'} width={'100%'} />
            <InputContact id={'description'} setVariable={setDescription} variable={description} title={'شرح مقاله'} type={'text'} width={'100%'} />
            <InputContact id={'hashtags'} setVariable={setHashtags} variable={hashtags} subTitle={"با کاما ( , ) از هم جدا کنید"} title={'هشتگ ها'} type={'text'} width={'100%'} />
            {/* <InputContact id={'detail1'} setVariable={setDetailsDescription1} variable={detailsDescription1} title={'متن اول'} type={'text'} width={'100%'} /> */}
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail1' style={{cursor:"pointer"}}>توضیحات شماره 1</label>
                <textarea cols="30" rows="5" 
                    id='detail1'
                    className='textArea'
                    value={detailsDescription1}
                    onChange={(e) => setDetailsDescription1(e.target.value)}
                >
                </textarea>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail2' style={{cursor:"pointer"}}>توضیحات شماره 2</label>
                <textarea cols="30" rows="5" 
                    id='detail2'
                    className='textArea'
                    value={detailsDescription2}
                    onChange={(e) => setDetailsDescription2(e.target.value)}
                >
                </textarea>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail3' style={{cursor:"pointer"}}>توضیحات شماره 3</label>
                <textarea cols="30" rows="5" 
                    id='detail3'
                    className='textArea'
                    value={detailsDescription3}
                    onChange={(e) => setDetailsDescription3(e.target.value)}
                >
                </textarea>
            </div>
            {/* pic */}
            <div>
                <p>عکس شماره 1</p>
                <div {...getRootProps()} style={dropzoneStyle}>
                    <input {...getInputProps()} />
                    <p>تصویر مقاله را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName && (
                        <p style={{ marginTop: '10px' }}>
                        نام فایل انتخابی: {fileName}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <p>عکس شماره 2</p>
                <div {...getRootProps()} style={dropzoneStyle}>
                    <input {...getInputProps()} />
                    <p>تصویر مقاله را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName && (
                        <p style={{ marginTop: '10px' }}>
                        نام فایل انتخابی: {fileName}
                        </p>
                    )}
                </div>
            </div>
            {/* pic */}
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail4' style={{cursor:"pointer"}}>توضیحات شماره 4</label>
                <textarea cols="30" rows="5" 
                    id='detail4'
                    className='textArea'
                    value={detailsDescription4}
                    onChange={(e) => setDetailsDescription4(e.target.value)}
                >
                </textarea>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail5' style={{cursor:"pointer"}}>توضیحات شماره 5</label>
                <textarea cols="30" rows="5" 
                    id='detail5'
                    className='textArea'
                    value={detailsDescription5}
                    onChange={(e) => setDetailsDescription5(e.target.value)}
                >
                </textarea>
            </div>
            <Divider/>
            <InputContact id={'ttr'} setVariable={setTimeToRead} variable={timeToRead} subTitle={"عددی بین 1 تا 100"} title={'زمان مورد نیاز برای خواندن'} type={'number'} width={'100%'} />
            
            <button
                className='login_Btn_No_Hid'
                onClick={handleSubmit}
                style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                type="button"
            >ثبت</button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </form>
    )
}


const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '10px',
};


export default NewBlog