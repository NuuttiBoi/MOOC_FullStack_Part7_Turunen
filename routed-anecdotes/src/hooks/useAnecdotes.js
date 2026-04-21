import {useEffect, useState} from "react";
import anecdoteService from "../services/anecdotes.js"

export const useAnecdotes = () => {
    const [anecdotes, setAnecdotes] = useState([])
    useEffect(() => {
        anecdoteService.getAll().then(data => setAnecdotes(data))
    }, [])
    const addAnecdote = async (anecdote) => {
        const newAnecdote = await anecdoteService.createNew(anecdote)
        setAnecdotes(prev => prev.concat(newAnecdote))
    }
    const deleteAnecdote = async (id) => {
        await anecdoteService.deleteAnecdote(id)
        setAnecdotes(prev => prev.filter(ane => ane.id !== id))
    }
    return {anecdotes, addAnecdote, deleteAnecdote}

}