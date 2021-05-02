export function validateDocumentSchema(document: unknown): void | never {
  assertIsObject(document, ["meta", "data"], "document");
  const typedDocument = document as { meta: unknown; data: unknown };

  validateMeta(typedDocument.meta);
  validateData(typedDocument.data);
}

function validateData(data: unknown): void | never {
  assertIsObject(data, ["assets"], "data");
  assertIsArray((data as Record<string, unknown>).assets, "data.assets");
}

function validateMeta(meta: unknown): void | never {
  assertIsObject(meta, ["version"], "meta");
  assertIsString((meta as Record<string, unknown>).version, "meta.version");
}

function assertIsArray(element: unknown, elementName: string): void | never {
  Array.isArray;
  if (!element || !Array.isArray(element)) {
    throw new Error(`${elementName} is not an array.`);
  }
}

function assertIsObject(
  element: unknown,
  requiredKeys: string[],
  elementName: string
): void | never {
  if (!element) {
    throw new Error(`${elementName} is empty.`);
  }

  if (typeof element !== "object") {
    throw new Error(`${elementName} is not an object.`);
  }

  const objectKeys = Object.keys(element as Record<string, unknown>);

  for (const key of requiredKeys) {
    if (!objectKeys.includes(key)) {
      throw new Error(`"${key}" is missing in "${elementName}"`);
    }
  }
}

function assertIsString(element: unknown, elementName: string): void | never {
  if (!element || typeof element !== "string") {
    throw new Error(`${elementName} is not a string.`);
  }
}
