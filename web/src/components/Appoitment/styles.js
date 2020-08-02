import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  height: 500px;
  width: 700px;

  padding: 10px;
  
  border: .6px solid var(--placeholder);
  border-radius: 12px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    appearance: none;
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 213px;
  height: 120px;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`

export const Photo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.span`
  color: #333;
`

export const Document = styled.span`
  font-size: 14px;
  color: var(--placeholder);
`