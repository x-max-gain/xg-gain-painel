"use client";

import { getDataProfile, updateProfileInformations } from "@/services/modules/profile.module";
import { updateProfileInformationsType } from "@/services/types/profile";
import { ErrorMessage, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

export default function CreateBotInformations() {
    const [loading, setLoading] = useState(true);
    const [initialValuesInformations, setInitialValuesInformations] = useState<updateProfileInformationsType>({
        name: '',
        phone: {
            number: '',
            areaCode: '',
            countryCode: '55',
        },
        email: ''
    })
    // ? INFORMATIONS
    const validationSchemaInformations = Yup.object({
        name: Yup.string().required('Nome é obrigatório'),
        phone: Yup.object({
            number: Yup.string().required('Telefone é obrigatório'),
            areaCode: Yup.string().required('DDD é obrigatório'),
            countryCode: Yup.string().required('Código do país é obrigatório'),
        }),
    });

    const handleSubmitInformations = (values: updateProfileInformationsType) => {
        delete values.email;
        updateProfileInformations(values);
    };

    // ? PASSWORD
    const initialValuesPassword = {
        name: ''
    };
    const validationSchemaPassword = Yup.object({
        name: Yup.string().required('Nome é obrigatório'),
    });

    const handleSubmitPassword = (values: { name: string }) => {
        console.log('Form Data:', values);
    };

    useEffect(() => {
        (async () => {
            const res = await getDataProfile();
            console.log(res);
            setInitialValuesInformations({ name: res.name, phone: res.phone, email: res.email });
            setLoading(false);
        })()
    }, [])

    return (
        <div className="grid grid-cols-2 gap-4 p-6">
            {!loading && (
                <>
                    <Formik
                        initialValues={initialValuesInformations}
                        validationSchema={validationSchemaInformations}
                        onSubmit={handleSubmitInformations}
                    >
                        {({ isSubmitting, handleChange, handleBlur, values }) => (
                            <Form className="bg-background-deep border border-gray-200  rounded-md p-4 shadow">
                                <h2 className="text-lg font-bold mb-4 text-gray-500">Informações Pessoais</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nome</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500  focus:border-gray-400 focus:outline-none bg-transparent"
                                        />
                                        <ErrorMessage name="name" component="span" className="text-red-600 error-message-form" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">E-mail</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                                            name="email"
                                            id="email"
                                            value={values.email}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Telefone</label>
                                        <div className="grid grid-cols-8 gap-4">
                                            <div>
                                                <select
                                                    className="text-center mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                                                    defaultValue="Masculino"
                                                    name="phone.countryCode"
                                                    id="phone.countryCode"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.phone.countryCode}
                                                >
                                                    <option>55</option>
                                                </select>
                                                <ErrorMessage name="phone.countryCode" component="span" className="text-red-600 error-message-form" />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="phone.areaCode"
                                                    id="phone.areaCode"
                                                    placeholder="(00)"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.phone.areaCode}
                                                    className="text-center mt-1 block w-full border-b text-sm border-gray-300 text-gray-500  focus:border-gray-400 focus:outline-none bg-transparent"
                                                />
                                                <ErrorMessage name="phone.areaCode" component="span" className="text-red-600 error-message-form" />
                                            </div>
                                            <div className="col-span-6">
                                                <input
                                                    type="text"
                                                    name="phone.number"
                                                    id="phone.number"
                                                    placeholder="00000-0000"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.phone.number}
                                                    className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500  focus:border-gray-400 focus:outline-none bg-transparent"
                                                />
                                                <ErrorMessage name="phone.number" component="span" className="text-red-600 error-message-form" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" disabled={isSubmitting} className="bg-green-500 text-white px-4 py-2 rounded w-full">
                                        {isSubmitting ? 'Savando...' : 'Savar'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <Formik initialValues={initialValuesPassword}
                        validationSchema={validationSchemaPassword}
                        onSubmit={handleSubmitPassword}
                    >
                        {({ isSubmitting }) => (
                            <Form className="bg-background-deep border border-gray-200 rounded-md p-4 shadow">
                                <h2 className="text-lg font-bold mb-4 text-gray-500">Conta</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Senha atual</label>
                                        <input
                                            type="text"
                                            name="password-current"
                                            className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nova senha</label>
                                        <input
                                            type="text"
                                            name="password-new"
                                            className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Confirme a nova senha</label>
                                        <input
                                            type="text"
                                            name="password-confirm"
                                            className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
                                            Alterar Senha
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </>
            )}
        </div>
    );
}
