import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Script from "next/script";
import styles from './forms.module.css';
import { budgetOptions, businessOnlineOptions, projectTypeOptions, startTimingOptions } from '@/webContents/form';

export default function ContactForm() {

    const { 
        register, 
        handleSubmit, 
        formState: { 
            errors 
        }, 
        reset,
        setValue,
        watch,
        trigger
    } = useForm();

    const [submitting, setSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [meetingDate, setMeetingDate] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [captchatoken, setCaptchaToken] = useState("");

    useEffect(() => {
        if (captchatoken) {
            setValue("recaptcha_response", captchatoken);
        }
    }, [captchatoken]);

    const onSubmit = async (formData) => {

        try {

            const dataToSubmit = {
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                ...formData,
            };

            setSubmitting(true);
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });

            const result = await response.json();
            if (result.success) {
                setFormSubmitted(true);
                reset();
            } else {
                console.error('Form submission failed:', result.message);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const filterTime = (time) => {
        const selectedDate = new Date(time);
        const selectedHour = selectedDate.getHours();
        return selectedHour >= 11 && selectedHour < 16;
    };

    const handleDateChange = (date) => {
        setMeetingDate(date);
        setValue('meetingDate', date);
    };

    const scheduleMeeting = watch('scheduleMeeting');

    const nextStep = async () => {
        const isValid = await trigger();
        if (isValid) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <>
            {formSubmitted ? 
                (<FormSubmittedSuccessfully/>) : 
                (<form 
                    className={styles.contact__form} 
                    onSubmit={handleSubmit(onSubmit)}
                >        
                    <input
                        type="hidden"
                        {...register("recaptcha_response")}
                        id="recaptchaResponse"
                    />           
                    {currentStep === 1 && (
                        <>
                            <div 
                                className={styles.form__group}
                            >
                                <label>
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="(e.g John Doe)" 
                                    {...register(
                                        'fullName', 
                                        { 
                                            required: true 
                                        }
                                    )} 
                                />
                                {errors.fullName && <span className={styles.error}>Full Name is required</span>}
                            </div>
                            <div 
                                className={styles.form__group}
                            >
                                <label>
                                    Business Name
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="(e.g Akanda and Sons Ltd)" 
                                    {...register(
                                        'businessName', 
                                        { 
                                            required: true 
                                        }
                                    )} 
                                />
                                {errors.businessName && <span className={styles.error}>Business name is required</span>}
                            </div>
                            <div className={styles.form__btns}>
                                <button 
                                    type="button" 
                                    onClick={nextStep} 
                                    className={`${styles.next__btn} ${styles.step1__btn}`}
                                >
                                    Next
                                </button>                        
                            </div>
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            <div 
                                className={styles.form__group}
                            >
                                <label>
                                    Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    placeholder="(e.g 2348012345678)"
                                    {...register('phoneNumber', 
                                        { 
                                            required: true,
                                            pattern: {
                                                value: /^[0-9]{10,15}$/,
                                                message: "Invalid phone number"
                                            }
                                        }
                                    )} 
                                />
                                {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber.message}</span>}
                            </div>
                            <div 
                                className={styles.form__group}
                            >
                                <label>
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="(e.g johndoe1234@email.com)"
                                    {...register('email', 
                                        { 
                                            required: true,
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/,
                                                message: "Invalid email address"
                                            }
                                        }
                                    )} 
                                />
                                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                            </div>
                            <div className={styles.form__btns}>
                                <button 
                                    type="button" 
                                    onClick={prevStep}
                                    className={styles.prev__btn}
                                >
                                    Previous
                                </button>
                                <button 
                                    type="button" 
                                    onClick={nextStep}
                                    className={styles.next__btn}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}

                    {currentStep === 3 && (
                        <>
                            <div 
                                className={styles.form__group}
                            >
                                <label>
                                    Project Type
                                </label>
                                <select 
                                    {...register(
                                        'projectType', 
                                        { 
                                            required: true,                               
                                        }
                                    )}
                                >
                                    <option 
                                        disabled
                                    >
                                        Select an option
                                    </option>
                                    {projectTypeOptions.map( ( list, i ) => (
                                        <option
                                            key={i} 
                                            value={list.value}
                                        >
                                            {list.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.projectType && <span className={styles.error}>Select your preferred project type</span>}
                            </div>
                            <div 
                                className={styles.form__group}
                            >
                                <label>
                                    What is your budget for this project?
                                </label>
                                <select 
                                    {...register('budget', 
                                        { 
                                            required: true,                               
                                        })
                                    }
                                >
                                    <option 
                                        disabled
                                        defaultChecked
                                    >
                                        Select an option
                                    </option>
                                    {budgetOptions.map( ( list, i ) => (
                                        <option
                                            key={i} 
                                            value={list.value}
                                        >
                                            {list.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.budget && <span className={styles.error}>Select a budget option</span>}
                            </div>
                            <div className={styles.form__btns}>
                                <button 
                                    type="button" 
                                    onClick={prevStep}
                                    className={styles.prev__btn}
                                >
                                    Previous
                                </button>
                                <button 
                                    type="button" 
                                    onClick={nextStep}
                                    className={styles.next__btn}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}

                    {currentStep === 4 && (
                        <>
                            <div className={styles.form__group}>
                                <label>
                                    Do you presently run your business online?
                                </label>
                                <select 
                                    {...register(
                                        'businessOnline', 
                                        { 
                                            required: true 
                                        }
                                    )}
                                >
                                    <option 
                                        disabled
                                        defaultChecked
                                    >
                                        Select an option
                                    </option>
                                    {businessOnlineOptions.map( ( list, i ) => (
                                        <option
                                            key={i} 
                                            value={list.value}
                                        >
                                            {list.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.businessOnline && <span className={styles.error}>This field is required</span>}
                            </div>
                            <div className={styles.form__group}>
                                <label>How Soon would you like to start this project?</label>
                                <select 
                                    {...register(
                                        'startTiming', 
                                        { 
                                            required: true 
                                        }
                                    )}
                                >
                                    <option 
                                        disabled
                                    >
                                        Select an option
                                    </option>
                                    {startTimingOptions.map( ( list, i ) => (
                                        <option
                                            key={i} 
                                            value={list.value}
                                        >
                                            {list.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.startTiming && <span className={styles.error}>This field is required</span>}
                            </div>
                            <div className={styles.form__btns}>
                                <button 
                                    type="button" 
                                    onClick={prevStep}
                                    className={styles.prev__btn}
                                >
                                    Previous
                                </button>
                                <button 
                                    type="button" 
                                    onClick={nextStep}
                                    className={styles.next__btn}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}

                    {currentStep === 5 && (
                        <>
                            <div className={styles.form__group}>
                                <label>
                                    Additional Message
                                </label>
                                <textarea 
                                    {...register('additionalMessage')} 
                                />
                            </div>
                            <div className={styles.form__group}>
                                <label>
                                    Would you like to schedule a meeting date?
                                </label>
                                <div>
                                    <label>
                                        <input 
                                            type="radio" 
                                            value="yes" 
                                            {...register(
                                                'scheduleMeeting', 
                                                { 
                                                    required: true 
                                                }
                                            )} 
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            value="no" 
                                            {...register(
                                                'scheduleMeeting', 
                                                { 
                                                    required: true 
                                                }
                                            )} 
                                        />
                                        No
                                    </label>
                                </div>
                                {errors.scheduleMeeting && <span className={styles.error}>Please select an option</span>}
                            </div>

                            {scheduleMeeting === 'yes' && (
                                <div className={styles.form__group}>
                                    <label>Choose a meeting date</label>
                                    <DatePicker
                                        selected={meetingDate}
                                        onChange={handleDateChange}
                                        filterDate={isWeekday}
                                        filterTime={filterTime}
                                        showTimeSelect
                                        minDate={new Date().setDate(new Date().getDate() + 3)}
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        placeholderText="Select a meeting date"
                                    />
                                    {errors.meetingDate && <span className={styles.error}>Meeting date is required</span>}
                                </div>
                            )}
                            <div className={styles.form__btns}>
                                <button 
                                    type="button" 
                                    onClick={prevStep}
                                    className={styles.prev__btn}
                                >
                                    Previous
                                </button>
                                <button 
                                    type="submit" 
                                    disabled={submitting}
                                    className={styles.submit__btn}
                                >
                                    {submitting && (
                                        <span className={styles.submiting__icon}>
                                        </span>
                                    )}
                                    {submitting ? "Submitting" : "Submit"}
                                </button>
                            </div>
                        </>
                    )}                        
                </form>
            )}
            <Script 
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} 
                strategy="lazyOnload" 
                id="recaptcha-load"
            />
        </>
    );
}

const FormSubmittedSuccessfully = () => {
    return (
        <>
            <p className={styles.success__message}>Form submitted successfully!</p>
        </>
    )
}
