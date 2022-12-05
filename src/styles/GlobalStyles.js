import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { typography } from "./typography";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    list-style: none;
    background-color: ${colors.grey4};
    color: white

}

.button{

    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    height: 48px;

    align-items: center;
    padding: 0px 1.375rem;
    gap: 0.634rem;    
    border-radius: 4.06066px;
    color: #FFFFFF;    

}

.button.primary{
    background-color: ${colors.colorPrimary};
    border: 0.0625rem solid ${colors.colorPrimary};
}
.button.primary:hover{
    background-color: ${colors.colorPrimaryFocus};
    border: 0.0625rem solid ${colors.colorPrimaryFocus};
}

.button.disabled{
    background-color: ${colors.colorPrimaryNegative};
    border: 0.0625rem solid ${colors.colorPrimaryNegative};
}
.button.disabled:hover{
    background-color: ${colors.colorPrimaryFocus};
    border: 0.0625rem solid ${colors.colorPrimaryFocus};
}

.button.grey{
    background-color: ${colors.grey3};
    border: 0.0625rem solid ${colors.grey3};
    text-decoration: none;
    

    width: 67.49px;
    height: 40.11px;  

}
.button.grey:hover{
    background-color: ${colors.grey2};
    border: 0.0625rem solid ${colors.grey2};

}
.button.greyBig{
    background-color: ${colors.grey1};
    border: 0.0625rem solid ${colors.grey1};
    text-decoration: none;
    

    width: 100%;
    height: 48.11px;  

}
.button.greyBig:hover{
    background-color: ${colors.grey2};
    border: 0.0625rem solid ${colors.grey2};

}
.input{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    height: 48px;
    width: 100%; 

    background-color: ${colors.grey2}; 
    border: 1.2182px solid  ${colors.grey2};
    border-radius: 4px;

 
       
}
.input:focus{
    border-color: ${colors.grey0};

}
.input::placeholder{
    font-size: ${typography.headline.size};
    font-weight: ${typography.headline.weigth};
    line-height: ${typography.headline.heigth};
    color: ${colors.grey0};    
    
}
.input:focus::placeholder{
    color: ${colors.grey0};
}


`;
