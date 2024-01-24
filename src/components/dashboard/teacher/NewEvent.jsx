import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import InputContact from '../../modules/input/InputContact'
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { showToast } from '../../modules/AuthModules/Toastify';

function NewEvent() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseToken = await axios.get('http://localhost:3001/dashboard/token', { withCredentials: true });
                const { id } = responseToken.data;
    
                const responseFullDetail = await axios.get(`http://localhost:3001/fullDetail/${id}`);
                setAuthorName(responseFullDetail.data[0][0].name)
                setAuthorLastName(responseFullDetail.data[0][0].lastName)
                setTeacher(`${authorName} ${authorLastName}`)

                const responseToken3 = await axios.get('http://localhost:3001/events/data');
                setData(responseToken3.data);
                console.log(responseToken3.data);

                const responseToken2 = await axios.get('http://localhost:3001/TeacherUsers/data');
                setUsers(await responseToken2.data[0]);
                console.log(responseToken2.data[0]);
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
                setUserRole('error');
            }
        };
    
        fetchData();
    
    }, []);
    
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    
    const [imageData, setImageData] = useState('');
    
    const [title, setTitle] = useState(''); //1
    const [shortName, setShortName] = useState(''); //2
    const [category, setCategory] = useState(''); //3
    const [subtitle, setSubTitle] = useState(''); //4
    const [teacher, setTeacher] = useState(''); //5

    const [fileName, setFileName] = useState(''); //6
    const [imagePath, setImagePath] = useState(''); //6
    const [newImagePath1, setNewImagePath1] = useState(''); //6

    const [price, setPrice] = useState(''); //7
    const [discount, setDiscount] = useState(''); //8

    const [qeustion1, setQeustion1] = useState(''); //9
    const [answer1, setAnswer1] = useState(''); //10

    const [qeustion2, setQeustion2] = useState(''); //11
    const [answer2, setAnswer2] = useState(''); //12
    
    const [qeustion3, setQeustion3] = useState(''); //13
    const [answer3, setAnswer3] = useState(''); //14

    const [qeustion4, setQeustion4] = useState(''); //15
    const [answer4, setAnswer4] = useState(''); //16

    const [video, setVideo] = useState(null); //17

    const [fileName2, setFileName2] = useState(''); //18
    const [imagePath2, setImagePath2] = useState(''); //18
    const [newImagePath2, setNewImagePath2] = useState(''); //18

    const [place, setPlace] = useState(''); //19

    const [time, setTime] = useState(''); //20

    const [description, setDescription] = useState('');

    const [authorName, setAuthorName] = useState('');
    const [authorLastName, setAuthorLastName] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [detailsDescription1, setDetailsDescription1] = useState('');
    const [detailsDescription2, setDetailsDescription2] = useState('');
    const [detailsDescription3, setDetailsDescription3] = useState('');
    const [descriptionImage1, setDescriptionImage1] = useState('');
    const [descriptionImage2, setDescriptionImage2] = useState('');
    const [detailsDescription4, setDetailsDescription4] = useState('');
    const [detailsDescription5, setDetailsDescription5] = useState('');
    const [timeToRead, setTimeToRead] = useState('');
    
    const [fileName3, setFileName3] = useState('');
    
    const [imagePath3, setImagePath3] = useState('');
    
    const [newImagePath3, setNewImagePath3] = useState('');

    const onDropImage1 = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImageData(file);
        setFileName(file.name);
    };
    
    const onDropImage2 = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setDescriptionImage1(file);
        setFileName2(file.name);
    };
    
    
    const { getRootProps: getRootPropsImage1, getInputProps: getInputPropsImage1 } = useDropzone({ onDrop: onDropImage1 });
    const { getRootProps: getRootPropsImage2, getInputProps: getInputPropsImage2 } = useDropzone({ onDrop: onDropImage2 });
    const { getRootProps: getRootPropsImage3, getInputProps: getInputPropsImage3 } = useDropzone({
        accept: 'video/*',
        maxFiles: 1,
        maxSize: 10485760, // 10MB in bytes
        onDrop: (acceptedFiles) => {
            const selectedVideo = acceptedFiles[0];
            setVideo(selectedVideo);
            setFileName3(selectedVideo.name);
        },
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!imageData) { 
            showToast('لطفاً یک تصویر را انتخاب کنید.', "error");
            return;
        }

        const formData = new FormData();
        formData.append('files', imageData);
        formData.append('files', descriptionImage1);
        formData.append('files', descriptionImage2);

        try {
            const response = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        
            const imagePath1 = response.data.paths[0].split(`\\`).join("/");
            const imagePath2 = response.data.paths[1].split(`\\`).join("/");
            const imagePath3 = response.data.paths[2].split(`\\`).join("/");
        
            setImagePath(imagePath1);
            setImagePath2(imagePath2);
            setImagePath3(imagePath3);
        
            showToast('اطلاعات با موفقیت آپلود شد.', 'success');
            axios.post(`http://localhost:3001/dashboard/blogs/add`, {
                imageData: imagePath1,
                date: moment().locale('fa').format('YYYY-MM-DD'),
                title: title,
                description: description,
                authorName: authorName,
                authorLastName: authorLastName,
                hashtags: hashtags,
                detailsDescription1: detailsDescription1,
                detailsDescription2: detailsDescription2,
                descriptionImage1: imagePath2,
                descriptionImage2: imagePath3,
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
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود تصویر: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
        
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' className='newBlogForm'>
            <InputContact id={'title'} setVariable={setTitle} variable={title} title={'عنوان رویداد'} type={'text'} width={'100%'} />
            <InputContact id={'category'} setVariable={setCategory} variable={category} subTitle={"رویدادها یا مدرس‌ها یا دوره‌ها"} title={'دسته بندی'} type={'text'} width={'100%'} />
            <InputContact id={'headSubTitle'} setVariable={setShortName} variable={shortName} subTitle={"مانند طراحی قالب یا..."} title={'نام کوچک رویداد'} type={'text'} width={'100%'} />
            <InputContact id={'teacher'} setVariable={setTeacher} variable={teacher} title={'استاد دوره'} type={'text'} width={'100%'} />
            <InputContact id={'detailSubtitle'} setVariable={setSubTitle} variable={subtitle} title={'اطلاعات کوتاه رویداد'} type={'text'} width={'100%'} />
            
            <div {...getRootPropsImage1()} style={dropzoneStyle}>
                <input {...getInputPropsImage1()} />
                <p>تصویر معرفی رویداد را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                {fileName && (
                    <p style={{ marginTop: '10px' }}>
                    نام فایل انتخابی: {fileName}
                    </p>
                )}
            </div>
            {/* <Divider/> */}
            {/* <p>اطلاعات اصلی:</p> */}
            <InputContact id={'price'} setVariable={setPrice} variable={price} title={'قیمت'} type={'number'} width={'100%'} />
            <InputContact id={'discount'} setVariable={setDiscount} variable={discount} subTitle={"بر اساس درصد"} title={'تخفیف'} type={'text'} width={'100%'} />

            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='question1' style={{cursor:"pointer"}}>عنوان سوال شماره 1 <span style={{color:"#667085", cursor:"text"}}>( مانند تحقیقات مبانی و طراحی UX )</span></label>
                <InputContact id={'question1'} setVariable={setQeustion1} variable={qeustion1} type={'text'} width={'100%'} />
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail2' style={{cursor:"pointer"}}>توضیحات شماره 1</label>
                <textarea cols="30" rows="5" 
                    id='detail2'
                    className='textArea'
                    value={answer1}
                    onChange={(e) => setAnswer1(e.target.value)}
                >
                </textarea>
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='question2' style={{cursor:"pointer"}}>عنوان سوال شماره 2 <span style={{color:"#667085", cursor:"text"}}>( مانند مفهوم نمونه سازی Low-Fidelity )</span></label>
                <InputContact id={'question2'} setVariable={setQeustion2} variable={qeustion2} type={'text'} width={'100%'} />
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail3' style={{cursor:"pointer"}}>توضیحات شماره 2</label>
                <textarea cols="30" rows="5" 
                    id='detail3'
                    className='textArea'
                    value={answer2}
                    onChange={(e) => setAnswer2(e.target.value)}
                >
                </textarea>
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='question3' style={{cursor:"pointer"}}>عنوان سوال شماره 3 <span style={{color:"#667085", cursor:"text"}}>( مانند نمونه سازی High-Fidelity تا تجزیه و تحلیل Post-Launch )</span></label>
                <InputContact id={'question3'} setVariable={setQeustion3} variable={qeustion3} type={'text'} width={'100%'} />
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail3' style={{cursor:"pointer"}}>توضیحات شماره 3</label>
                <textarea cols="30" rows="5" 
                    id='detail3'
                    className='textArea'
                    value={answer3}
                    onChange={(e) => setAnswer3(e.target.value)}
                >
                </textarea>
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='question4' style={{cursor:"pointer"}}>عنوان سوال شماره 4 <span style={{color:"#667085", cursor:"text"}}>( مانند CAPSTONE - طراحی نمونه کاره )</span></label>
                <InputContact id={'question4'} setVariable={setQeustion4} variable={qeustion4} type={'text'} width={'100%'} />
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail3' style={{cursor:"pointer"}}>توضیحات شماره 4</label>
                <textarea cols="30" rows="5" 
                    id='detail3'
                    className='textArea'
                    value={answer4}
                    onChange={(e) => setAnswer4(e.target.value)}
                >
                </textarea>
            </div>
            {/* pic */}
            <div>
                <p>فیلم معرفی</p>
                <div {...getRootPropsImage3()} style={dropzoneStyle}>
                    <input {...getInputPropsImage3()} />
                    <p>ویدئو رویداد را انتخاب یا اینجا بکشید باید کمتر از 10 مگابایت باشد (فقط یک ویدئو)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( mp4, webm, ogg )</p>
                    {fileName3 && (
                        <p style={{ marginTop: '10px' }}>
                            نام فایل انتخابی: {fileName3}
                        </p>
                    )}
                    {video && (
                        <video width="320" height="240" controls>
                            <source src={URL.createObjectURL(video)} type={video.type} />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
            <div>
                <p>عکس نمایشی فیلم</p>
                <div {...getRootPropsImage2()} style={dropzoneStyle}>
                    <input {...getInputPropsImage2()} />
                    <p>تامبنیل را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName2 && (
                        <p style={{ marginTop: '10px' }}>
                            نام فایل انتخابی: {fileName2}
                        </p>
                    )}
                </div>
            </div>
            {/* pic */}
            <InputContact id={'place'} setVariable={setDescription} variable={description} subTitle={"تهران یا.."} title={'محل برگزاری'} type={'text'} width={'100%'} />
            <InputContact id={'time'} setVariable={setDescription} variable={description} subTitle={"سال، ماه، روز، ساعت، دقیقه، ثانیه"} title={'تاریخ'} type={'text'} width={'100%'} />

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
export default NewEvent