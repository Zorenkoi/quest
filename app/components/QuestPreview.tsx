import React from "react";
import { IQuest } from "../interfaces";
import { useMutation } from "@tanstack/react-query";
import { deleteQuest } from "../api";
import { queryClient } from "../layout";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

const QuestPreview: React.FC<IQuest> = ({
  id,
  createdAt,
  title,
  questions,
}) => {
  const { mutate: deleteQuestMutation, isPending } = useMutation({
    mutationFn: deleteQuest,
    mutationKey: ["quests"],
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const handleDelete = () => {
    if (isPending) return;
    deleteQuestMutation(id);
  };

  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <Box
      sx={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Created at: {formattedDate}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Number of questions: {questions.length}
      </Typography>
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDelete}
          disabled={isPending}
        >
          {isPending ? "Deleting..." : "Delete"}
        </Button>
        <Link href={`/runquest/${id}`} passHref>
          <Button variant="contained">Run Test</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default QuestPreview;
