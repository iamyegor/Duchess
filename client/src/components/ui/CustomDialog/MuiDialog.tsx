import { styled } from "@mui/material/styles";
import { Dialog } from "@mui/material";

const MuiDialog = styled(Dialog)(() => ({
    "& .MuiDialog-paper": {
        borderRadius: "2px",
        padding: "24px",
        width: "100%",
        margin: "10px",
        backgroundColor: "#11110f",
        color: "#fff7e8",
        border: "1px solid rgba(255, 247, 232, 0.14)",
    },
}));

export default MuiDialog;
