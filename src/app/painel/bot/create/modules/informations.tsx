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
                                            placeholder="Nome do robô"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="large-input"
                                            className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
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
                                            className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
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
                                            className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                        >
                                            <option value="">Selecione o ativo</option>
                                        </select>
                                    </div>
                                </div>
                                <h2 className="text-lg font-bold mb-4 text-gray-500">Configurações</h2>
                                <div className="grid gap-6 mb-6 md:grid-cols-12">
                                    <div className="mb-6 col-span-12 grid gap-6 md:grid-cols-12">
                                        <div className="col-span-3">
                                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de robô</p>
                                            <select
                                                value={values.name}
                                                name="type-active"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            >
                                                <option value="demo">DEMO</option>
                                                <option value="real">REAL</option>
                                            </select>
                                        </div>
                                        <div className="col-span-3">
                                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fechar operação após 24 horas</p>
                                            <select
                                                value={values.name}
                                                name="type-active"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            >
                                                <option value="not">NÃO</option>
                                                <option value="yes">SIM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-lg font-bold mb-4 text-gray-500">Horários de operação</h2>
                                <div className="flex">
                                    <div className="col-span-1 mr-4">
                                        <div className="flex items-center justify-end h-full">
                                            <input
                                                type="checkbox"
                                                value={values.name}
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full mb-6 grid gap-6 md:grid-cols-12">
                                        <div className="col-span-3">
                                            <label
                                                htmlFor="large-input"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Horário de início</label>
                                            <input
                                                type="time"
                                                value={values.name}
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            />
                                        </div>
                                        <div className="col-span-3">
                                            <label
                                                htmlFor="large-input"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Horário de fim</label>
                                            <input
                                                type="time"
                                                value={values.name}
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-lg font-bold mb-4 text-gray-500">Stop Loss</h2>
                                <div className="flex">
                                    <div className="col-span-1 mr-4">
                                        <div className="flex items-center justify-end h-full">
                                            <input
                                                type="checkbox"
                                                value={values.name}
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full mb-6 grid gap-6 md:grid-cols-12">
                                        <div className="col-span-3">
                                            <label
                                                htmlFor="large-input"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo do stop loss</label>
                                            <select
                                                value={values.name}
                                                name="type-active"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            >
                                                <option value="percentage">Porcentagem</option>
                                                <option value="value">Valor</option>
                                            </select>
                                        </div>
                                        <div className="col-span-3">
                                            <label
                                                htmlFor="large-input"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor do stop loss</label>
                                            <input
                                                type="text"
                                                value={values.name}
                                                name="name"
                                                placeholder="0%"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-lg font-bold mb-4 text-gray-500">Stop Gain</h2>
                                <div className="flex">
                                    <div className="col-span-1 mr-4">
                                        <div className="flex items-center justify-end h-full">
                                            <input
                                                type="checkbox"
                                                value={values.name}
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full mb-6 grid gap-6 md:grid-cols-12">
                                        <div className="col-span-3">
                                            <label
                                                htmlFor="large-input"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de stop gain</label>
                                            <select
                                                value={values.name}
                                                name="type-active"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            >
                                                <option value="percentage">Porcentagem</option>
                                                <option value="value">Valor</option>
                                            </select>
                                        </div>
                                        <div className="col-span-3">
                                            <p
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor do stop gain</p>
                                            <input
                                                type="text"
                                                value={values.name}
                                                name="name"
                                                placeholder="0%"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="large-input"
                                                className="focus:outline-gray-300 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-gray-300"
                                            />
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
