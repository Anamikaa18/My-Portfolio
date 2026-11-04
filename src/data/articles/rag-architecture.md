---
title: Retrieval-Augmented Generation: Architecture and Workflow
description: A technical exploration of RAG architecture including document ingestion, chunking, embeddings, vector retrieval, context construction and response generation.
category: LLMs and RAG
date: 2026-10-12
---

# Retrieval-Augmented Generation: Architecture and Workflow

Large Language Models can generate human-like responses and perform a wide range of language tasks. However, they have an important limitation: their responses are based on the information available to them during training and the context provided at inference time.

They do not automatically have access to an organisation's private documents or continuously updated information.

Retrieval-Augmented Generation (RAG) addresses this limitation by connecting a language model to an external knowledge source.

Instead of relying exclusively on the model's internal knowledge, a RAG application retrieves relevant information and provides it as context for response generation.

This approach makes it possible to build applications that answer questions using documents and other structured or unstructured data sources.

## 1. Understanding RAG

RAG combines two major operations:

- **Retrieval:** Finding information relevant to a user's query.
- **Generation:** Using a language model to produce a response based on the retrieved information.

The basic workflow is:

1. A user submits a question.
2. The application searches an external knowledge source.
3. Relevant information is retrieved.
4. The retrieved information is added to the model's context.
5. The language model generates a response.

The quality of a RAG application depends on both retrieval quality and generation quality.

A powerful language model cannot compensate for consistently retrieving irrelevant documents.

## 2. High-Level RAG Architecture

A typical RAG system contains two major pipelines.

### Document ingestion pipeline

This pipeline prepares the knowledge source before users begin asking questions.

```text
        Source Documents
               |
               v
        Document Loading
               |
               v
        Text Extraction
               |
               v
         Text Cleaning
               |
               v
          Chunking
               |
               v
       Embedding Generation
               |
               v
        Vector Database
```

### Query processing pipeline

This pipeline handles incoming user questions.

```text
          User Query
               |
               v
         Query Processing
               |
               v
        Query Embedding
               |
               v
       Similarity Search
               |
               v
       Relevant Chunks
               |
               v
       Context Construction
               |
               v
        Language Model
               |
               v
         Final Response
```

These pipelines work together to provide an application with access to external knowledge.

## 3. Document Ingestion

The first stage is collecting information from the available sources.

Depending on the application, documents may come from:

- PDF files.
- Word documents.
- Text files.
- Web pages.
- Internal knowledge bases.
- Database records.
- Structured business documents.

The application must extract usable content from these sources.

Document extraction can introduce problems. PDFs may contain tables or scanned pages. Documents may contain repeated headers or irrelevant formatting. Poor extraction can reduce retrieval quality.

A preprocessing stage should therefore clean and normalise the extracted content.

Metadata is also important. Each document or chunk may contain information such as its source name, document type, creation date or access permissions.

This information can help with filtering and traceability.

## 4. Chunking Strategies

Language models have context limits. Passing an entire collection of documents into a model is usually impractical.

Chunking divides larger documents into smaller sections.

For example:

```text
Original Document
       |
       v
+------------------+
| Section 1        |
+------------------+
| Section 2        |
+------------------+
| Section 3        |
+------------------+
| Section 4        |
+------------------+
```

Each chunk can be converted into an embedding and stored for retrieval.

Common chunking approaches include:

**Fixed-size chunking**

Documents are divided according to a predefined number of characters or tokens.

It is simple to implement but may separate related information.

**Overlapping chunking**

Adjacent chunks share a portion of their content.

This can preserve context across chunk boundaries. However, excessive overlap increases storage and retrieval redundancy.

**Recursive chunking**

The document is split using a hierarchy of separators. It may try paragraphs first and then sentences or smaller units.

**Semantic chunking**

Text is divided according to changes in meaning or topic.

This can preserve semantic coherence but requires additional processing.

There is no universally optimal chunk size. It depends on document structure and retrieval requirements.

## 5. Embeddings and Vector Databases

An embedding is a numerical representation of information.

An embedding model converts text into a vector that captures useful semantic information.

For example:

```python
text = "How does retrieval-augmented generation work?"

vector = embedding_model.encode(text)
```

The resulting vector can be stored in a vector database.

When a user submits a question, the same embedding model converts that query into a vector.

The retrieval system then compares the query vector with stored document vectors.

Similarity measures such as cosine similarity can help identify semantically related content.

A vector database typically supports:

- Vector storage.
- Similarity search.
- Metadata filtering.
- Index management.
- Retrieval operations.

Examples of vector database technologies include FAISS, Chroma, Qdrant and Milvus.

The choice depends on deployment requirements and the scale of the application.

## 6. Retrieval and Context Construction

After generating the query embedding, the system retrieves the most relevant chunks.

A basic retrieval operation may return the top five results.

However, retrieving more chunks does not automatically improve answer quality.

Too much context can introduce irrelevant information. It can also increase token consumption and latency.

A context construction stage may therefore:

- Remove duplicate results.
- Apply metadata filters.
- Reorder retrieved chunks.
- Limit the total context size.
- Include source references.
- Apply a reranking model.

Reranking is particularly useful when the initial retrieval stage produces several candidates but their relevance scores are not sufficiently precise.

A reranker evaluates the candidates and places the most relevant information closer to the top.

## 7. Generation

The retrieved information is passed to a language model as part of its context.

A simplified prompt might look like this:

```text
You are an assistant that answers questions
using the supplied context.

Context:
{retrieved_documents}

Question:
{user_question}

Instructions:
- Answer using the provided context.
- Do not invent unsupported facts.
- If the context is insufficient, say so.
- Keep the response relevant to the question.
```

The model generates an answer using the supplied information.

The application may also return source references so users can inspect the documents behind the response.

It is important to remember that providing context does not guarantee factual correctness. The generated response still needs evaluation.

## 8. Evaluating a RAG System

RAG evaluation should examine retrieval and generation separately.

### Retrieval evaluation

Important measurements include:

- Precision at K.
- Recall at K.
- Mean Reciprocal Rank.
- Normalised Discounted Cumulative Gain.

These metrics help determine whether relevant information appears among the retrieved results.

### Generation evaluation

Generation quality can be assessed through:

- Answer relevance.
- Faithfulness to retrieved context.
- Correctness.
- Completeness.
- Citation accuracy.

Latency and cost should also be measured.

A system that produces accurate answers but takes an unreasonable amount of time may not be suitable for its intended users.

## 9. Common RAG Challenges

**Poor document extraction:** Important information may be lost before retrieval begins.

**Incorrect chunk sizes:** Chunks may lack sufficient context or contain too much unrelated information.

**Weak retrieval:** The system may retrieve documents that are semantically similar but do not answer the question.

**Hallucination:** The model may generate claims that are not supported by retrieved content.

**Outdated information:** The knowledge base may contain old documents.

**Access control:** A user must not retrieve documents they are not authorised to access.

These problems require architectural solutions rather than relying only on better prompts.

## 10. Improving RAG Architecture

A basic RAG system can be improved through several techniques:

- Hybrid search combining keyword and vector retrieval.
- Metadata filtering.
- Query rewriting.
- Reranking.
- Context compression.
- Better document preprocessing.
- Document-level access control.
- Retrieval and generation evaluation.
- Monitoring and feedback collection.

These techniques should be introduced according to measurable requirements.

Adding complexity without identifying a specific problem can make the system harder to maintain.

## Conclusion

RAG is not simply a language model connected to a vector database.

It is a complete information retrieval and generation pipeline.

Its effectiveness depends on document quality and retrieval strategy. It also depends on context construction and the ability to evaluate generated responses.

Understanding each component makes it easier to design AI applications that use external knowledge in a controlled and useful way.

## Further Exploration

- Embeddings and Vector Databases Explained.
- Document Chunking Strategies for RAG.
- Evaluating RAG Systems: Beyond Answer Generation.
- Understanding Large Language Models.