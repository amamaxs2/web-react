'use client'
import CardSection from "@/components/CardSection/CardSection";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Evolucoes() {

    const params = useSearchParams();
    const name = params.get('name');
    const [maringa, setmaringa] = useState<any>();
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((data) => {
            return data.json()
        }).then((data) => {
            setmaringa(data)
        })
    },[name])

    const imagem = maringa?.sprites.front_default
    return (
        <>
            <CardSection title={name}>
                <h1></h1>
                <img src={imagem}></img>
            </CardSection>
        </>
    )
}