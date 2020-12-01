# Finish Type Pipeline

1. Have it push and pull directly from the Cosmos DB
   1. Have Cosmos make backup definitions on every change
2. Use the types to get a list of CRUD endpoints to generate for Tools/Crud_Generator
3. Update the CRUD generated OAS v2 to OAS v3 using OpenAPI generator
4. Have the `gen-all` command run from the DB instead of the local files