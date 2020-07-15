import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import styled from 'styled-components'

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(100)
    .required(),
  details: yup.string().max(1000),
})

export default function AddActivityForm({ updateActivities }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <>
      <form onSubmit={handleSubmit(updateActivities)}>
        <StyledForm>
          <StyledLabel>
            {'Activity name'}
            <StyledInput
              name="name"
              ref={register}
              placeholder="Please, type your activity's name here"
            />
            {errors.name && errors.name.type === 'max' ? (
              <div>{errorMessageMax}</div>
            ) : (
              ''
            )}
          </StyledLabel>
          <label>
            {'Activity details'}
            <StyledTextarea
              name="details"
              ref={register}
              placeholder="Please, write a description of the activity or some useful information"
            />
            {errors.name && errors.name.type === 'max' ? (
              <div>{errorMessageMax}</div>
            ) : (
              ''
            )}
          </label>
          <StyledAddButton> Add </StyledAddButton>
        </StyledForm>
      </form>
      <DivisionLine />
    </>
  )
}

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin: 50px;
`

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 40px;
`

const StyledInput = styled.input`
  display: block;
  width: 277px;
  height: 40px;
  border-radius: 8px;
  border: solid 1px var(--primary);
  font-size: 1rem;
  color: var(--text-primary);

  :placeholder-shown {
    font-family: inherit;
    color: var(--text-secondary);
  }
`

const StyledTextarea = styled.textarea`
  display: block;
  width: 277px;
  height: 202px;
  border-radius: 8px;
  border: solid 1px var(--primary);
  margin-bottom: 40px;
  font-size: 1rem;
  color: var(--text-primary);

  :placeholder-shown {
    font-family: inherit;
    color: var(--text-secondary);
  }
`

const StyledAddButton = styled.button`
  display: block;
  width: 126px;
  height: 40px;
  border-radius: 20px;
  background: var(--primary);
  border: none;
  color: var(--senary);
`

const DivisionLine = styled.div`
  background-color: var(--primary);
  max-width: 100%;
  height: 1px;
  margin: 50px 30px;
`
