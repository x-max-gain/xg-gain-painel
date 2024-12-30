"use client";

import { createBotInformations } from "@/services/modules/bot.module";
import { createBotInformationsType } from "@/services/types/bot";
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

export default function CreateBotInformations() {
    const [loading, setLoading] = useState(true);
    const [initialValuesInformations, setInitialValuesInformations] = useState<createBotInformationsType>({
        name: '',
    })
    // ? INFORMATIONS
    const validationSchemaInformations = Yup.object({
        name: Yup.string().required('Nome é obrigatório'),
    });

    const handleSubmitInformations = (values: createBotInformationsType) => {
        createBotInformations(values);
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
        setLoading(false);
        /**(async () => {
            const res = await getDataProfile();
            console.log(res);
            setInitialValuesInformations({ name: res.name, phone: res.phone, email: res.email });
        })()**/
    }, [])

    return (
        <div className="p-4 bg-background-primary mt-4 rounded-md">
            {!loading && (
                <>
                    <Formik
                        initialValues={initialValuesInformations}
                        validationSchema={validationSchemaInformations}
                        onSubmit={handleSubmitInformations}
                    >
                        {({ isSubmitting, handleChange, handleBlur, values }) => (
                            <Form className="">
                                <h2 className="text-lg font-bold mb-4 text-gray-500">Informações do bot</h2>
                                <div className="grid gap-6 mb-6 md:grid-cols-12">
                                    <div className="mb-6 col-span-6">
                                        <label
                                            htmlFor="large-input"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                                        <input
                                            type="text"
                                            value={values.name}
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="large-input"
                                            className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                        />
                                    </div>
                                    <div className="mb-6 col-span-3">
                                        <label
                                            htmlFor="large-input"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de ativo</label>
                                        <select
                                            value={values.name}
                                            name="type-active"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="large-input"
                                            className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                        >
                                            <option value="">Selecione um tipo de ativo</option>
                                        </select>
                                    </div>
                                    <div className="mb-6 col-span-3">
                                        <label
                                            htmlFor="large-input"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ativo</label>
                                        <select
                                            value={values.name}
                                            name="active"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="large-input"
                                            className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                        >
                                            <option value="">Selecione o ativo</option>
                                        </select>
                                    </div>
                                </div>
                                <h2 className="text-lg font-bold mb-4 text-gray-500">Configurações</h2>
                                <div className="grid gap-6 mb-6 md:grid-cols-12">
                                    <div className="mb-6 col-span-12 grid gap-6 md:grid-cols-12">
                                        <div className="col-span-3">
                                            <label
                                                htmlFor="large-input"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de bot</label>
                                            <select
                                                value={values.name}
                                                name="type-active"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            >
                                                <option value="demo">DEMO</option>
                                                <option value="real">REAL</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-lg font-bold mb-4 text-gray-500">Stop Loss</h2>
                                <div className="grid gap-6 mb-6 md:grid-cols-12">
                                    <div className="mb-6 col-span-12 grid gap-6 md:grid-cols-12">
                                        <div className="col-span-3">
                                            <label
                                                htmlFor="large-input"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de bot</label>
                                            <select
                                                value={values.name}
                                                name="type-active"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            >
                                                <option value="demo">DEMO</option>
                                                <option value="real">REAL</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" disabled={isSubmitting} className="px-1 sm:px-4 py-2 bg-background-green rounded-md flex items-center justify-center">
                                        Salvar todos
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </>
            )}
        </div>
    );
}
