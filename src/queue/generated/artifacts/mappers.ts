/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
// tslint:disable:object-literal-sort-keys

import * as msRest from "@azure/ms-rest-js";

export const AccessPolicy: msRest.CompositeMapper = {
  serializedName: "AccessPolicy",
  type: {
    name: "Composite",
    className: "AccessPolicy",
    modelProperties: {
      start: {
        xmlName: "Start",
        required: true,
        serializedName: "Start",
        type: {
          name: "String"
        }
      },
      expiry: {
        xmlName: "Expiry",
        required: true,
        serializedName: "Expiry",
        type: {
          name: "String"
        }
      },
      permission: {
        xmlName: "Permission",
        required: true,
        serializedName: "Permission",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueueItem: msRest.CompositeMapper = {
  xmlName: "Queue",
  serializedName: "QueueItem",
  type: {
    name: "Composite",
    className: "QueueItem",
    modelProperties: {
      name: {
        xmlName: "Name",
        required: true,
        serializedName: "Name",
        type: {
          name: "String"
        }
      },
      metadata: {
        xmlName: "Metadata",
        serializedName: "Metadata",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ListQueuesSegmentResponse: msRest.CompositeMapper = {
  xmlName: "EnumerationResults",
  serializedName: "ListQueuesSegmentResponse",
  type: {
    name: "Composite",
    className: "ListQueuesSegmentResponse",
    modelProperties: {
      serviceEndpoint: {
        xmlIsAttribute: true,
        xmlName: "ServiceEndpoint",
        required: true,
        serializedName: "ServiceEndpoint",
        type: {
          name: "String"
        }
      },
      prefix: {
        xmlName: "Prefix",
        required: true,
        serializedName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        xmlName: "Marker",
        serializedName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        xmlName: "MaxResults",
        required: true,
        serializedName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      queueItems: {
        xmlIsWrapped: true,
        xmlName: "Queues",
        xmlElementName: "Queue",
        serializedName: "QueueItems",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueueItem"
            }
          }
        }
      },
      nextMarker: {
        xmlName: "NextMarker",
        required: true,
        serializedName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CorsRule: msRest.CompositeMapper = {
  serializedName: "CorsRule",
  type: {
    name: "Composite",
    className: "CorsRule",
    modelProperties: {
      allowedOrigins: {
        xmlName: "AllowedOrigins",
        required: true,
        serializedName: "AllowedOrigins",
        type: {
          name: "String"
        }
      },
      allowedMethods: {
        xmlName: "AllowedMethods",
        required: true,
        serializedName: "AllowedMethods",
        type: {
          name: "String"
        }
      },
      allowedHeaders: {
        xmlName: "AllowedHeaders",
        serializedName: "AllowedHeaders",
        type: {
          name: "String"
        }
      },
      exposedHeaders: {
        xmlName: "ExposedHeaders",
        serializedName: "ExposedHeaders",
        type: {
          name: "String"
        }
      },
      maxAgeInSeconds: {
        xmlName: "MaxAgeInSeconds",
        required: true,
        serializedName: "MaxAgeInSeconds",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GeoReplication: msRest.CompositeMapper = {
  serializedName: "GeoReplication",
  type: {
    name: "Composite",
    className: "GeoReplication",
    modelProperties: {
      status: {
        xmlName: "Status",
        required: true,
        serializedName: "Status",
        type: {
          name: "String"
        }
      },
      lastSyncTime: {
        xmlName: "LastSyncTime",
        required: true,
        serializedName: "LastSyncTime",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const RetentionPolicy: msRest.CompositeMapper = {
  serializedName: "RetentionPolicy",
  type: {
    name: "Composite",
    className: "RetentionPolicy",
    modelProperties: {
      enabled: {
        xmlName: "Enabled",
        required: true,
        serializedName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      days: {
        xmlName: "Days",
        serializedName: "Days",
        constraints: {
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Logging: msRest.CompositeMapper = {
  serializedName: "Logging",
  type: {
    name: "Composite",
    className: "Logging",
    modelProperties: {
      version: {
        xmlName: "Version",
        required: true,
        serializedName: "Version",
        type: {
          name: "String"
        }
      },
      deleteProperty: {
        xmlName: "Delete",
        required: true,
        serializedName: "Delete",
        type: {
          name: "Boolean"
        }
      },
      read: {
        xmlName: "Read",
        required: true,
        serializedName: "Read",
        type: {
          name: "Boolean"
        }
      },
      write: {
        xmlName: "Write",
        required: true,
        serializedName: "Write",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        xmlName: "RetentionPolicy",
        required: true,
        serializedName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const StorageError: msRest.CompositeMapper = {
  serializedName: "StorageError",
  type: {
    name: "Composite",
    className: "StorageError",
    modelProperties: {
      message: {
        xmlName: "Message",
        serializedName: "Message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Metrics: msRest.CompositeMapper = {
  serializedName: "Metrics",
  type: {
    name: "Composite",
    className: "Metrics",
    modelProperties: {
      version: {
        xmlName: "Version",
        serializedName: "Version",
        type: {
          name: "String"
        }
      },
      enabled: {
        xmlName: "Enabled",
        required: true,
        serializedName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      includeAPIs: {
        xmlName: "IncludeAPIs",
        serializedName: "IncludeAPIs",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        xmlName: "RetentionPolicy",
        serializedName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const QueueMessage: msRest.CompositeMapper = {
  serializedName: "QueueMessage",
  type: {
    name: "Composite",
    className: "QueueMessage",
    modelProperties: {
      messageText: {
        xmlName: "MessageText",
        serializedName: "MessageText",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DequeuedMessageItem: msRest.CompositeMapper = {
  xmlName: "QueueMessage",
  serializedName: "DequeuedMessageItem",
  type: {
    name: "Composite",
    className: "DequeuedMessageItem",
    modelProperties: {
      messageId: {
        xmlName: "MessageId",
        required: true,
        serializedName: "MessageId",
        type: {
          name: "String"
        }
      },
      insertionTime: {
        xmlName: "InsertionTime",
        required: true,
        serializedName: "InsertionTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      expirationTime: {
        xmlName: "ExpirationTime",
        required: true,
        serializedName: "ExpirationTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      popReceipt: {
        xmlName: "PopReceipt",
        required: true,
        serializedName: "PopReceipt",
        type: {
          name: "String"
        }
      },
      timeNextVisible: {
        xmlName: "TimeNextVisible",
        required: true,
        serializedName: "TimeNextVisible",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      dequeueCount: {
        xmlName: "DequeueCount",
        required: true,
        serializedName: "DequeueCount",
        type: {
          name: "Number"
        }
      },
      messageText: {
        xmlName: "MessageText",
        required: true,
        serializedName: "MessageText",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PeekedMessageItem: msRest.CompositeMapper = {
  xmlName: "QueueMessage",
  serializedName: "PeekedMessageItem",
  type: {
    name: "Composite",
    className: "PeekedMessageItem",
    modelProperties: {
      messageId: {
        xmlName: "MessageId",
        required: true,
        serializedName: "MessageId",
        type: {
          name: "String"
        }
      },
      insertionTime: {
        xmlName: "InsertionTime",
        required: true,
        serializedName: "InsertionTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      expirationTime: {
        xmlName: "ExpirationTime",
        required: true,
        serializedName: "ExpirationTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      dequeueCount: {
        xmlName: "DequeueCount",
        required: true,
        serializedName: "DequeueCount",
        type: {
          name: "Number"
        }
      },
      messageText: {
        xmlName: "MessageText",
        required: true,
        serializedName: "MessageText",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EnqueuedMessage: msRest.CompositeMapper = {
  xmlName: "QueueMessage",
  serializedName: "EnqueuedMessage",
  type: {
    name: "Composite",
    className: "EnqueuedMessage",
    modelProperties: {
      messageId: {
        xmlName: "MessageId",
        required: true,
        serializedName: "MessageId",
        type: {
          name: "String"
        }
      },
      insertionTime: {
        xmlName: "InsertionTime",
        required: true,
        serializedName: "InsertionTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      expirationTime: {
        xmlName: "ExpirationTime",
        required: true,
        serializedName: "ExpirationTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      popReceipt: {
        xmlName: "PopReceipt",
        required: true,
        serializedName: "PopReceipt",
        type: {
          name: "String"
        }
      },
      timeNextVisible: {
        xmlName: "TimeNextVisible",
        required: true,
        serializedName: "TimeNextVisible",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const SignedIdentifier: msRest.CompositeMapper = {
  serializedName: "SignedIdentifier",
  type: {
    name: "Composite",
    className: "SignedIdentifier",
    modelProperties: {
      id: {
        xmlName: "Id",
        required: true,
        serializedName: "Id",
        type: {
          name: "String"
        }
      },
      accessPolicy: {
        xmlName: "AccessPolicy",
        required: true,
        serializedName: "AccessPolicy",
        type: {
          name: "Composite",
          className: "AccessPolicy"
        }
      }
    }
  }
};

export const StorageServiceProperties: msRest.CompositeMapper = {
  serializedName: "StorageServiceProperties",
  type: {
    name: "Composite",
    className: "StorageServiceProperties",
    modelProperties: {
      logging: {
        xmlName: "Logging",
        serializedName: "Logging",
        type: {
          name: "Composite",
          className: "Logging"
        }
      },
      hourMetrics: {
        xmlName: "HourMetrics",
        serializedName: "HourMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      minuteMetrics: {
        xmlName: "MinuteMetrics",
        serializedName: "MinuteMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      cors: {
        xmlIsWrapped: true,
        xmlName: "Cors",
        xmlElementName: "CorsRule",
        serializedName: "Cors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CorsRule"
            }
          }
        }
      }
    }
  }
};

export const StorageServiceStats: msRest.CompositeMapper = {
  serializedName: "StorageServiceStats",
  type: {
    name: "Composite",
    className: "StorageServiceStats",
    modelProperties: {
      geoReplication: {
        xmlName: "GeoReplication",
        serializedName: "GeoReplication",
        type: {
          name: "Composite",
          className: "GeoReplication"
        }
      }
    }
  }
};

export const ServiceSetPropertiesHeaders: msRest.CompositeMapper = {
  serializedName: "service-setproperties-headers",
  type: {
    name: "Composite",
    className: "ServiceSetPropertiesHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetPropertiesHeaders: msRest.CompositeMapper = {
  serializedName: "service-getproperties-headers",
  type: {
    name: "Composite",
    className: "ServiceGetPropertiesHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetStatisticsHeaders: msRest.CompositeMapper = {
  serializedName: "service-getstatistics-headers",
  type: {
    name: "Composite",
    className: "ServiceGetStatisticsHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceListQueuesSegmentHeaders: msRest.CompositeMapper = {
  serializedName: "service-listqueuessegment-headers",
  type: {
    name: "Composite",
    className: "ServiceListQueuesSegmentHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueueCreateHeaders: msRest.CompositeMapper = {
  serializedName: "queue-create-headers",
  type: {
    name: "Composite",
    className: "QueueCreateHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueueDeleteHeaders: msRest.CompositeMapper = {
  serializedName: "queue-delete-headers",
  type: {
    name: "Composite",
    className: "QueueDeleteHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueueGetPropertiesHeaders: msRest.CompositeMapper = {
  serializedName: "queue-getproperties-headers",
  type: {
    name: "Composite",
    className: "QueueGetPropertiesHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "x-ms-meta",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        },
        headerCollectionPrefix: "x-ms-meta-"
      },
      approximateMessagesCount: {
        serializedName: "x-ms-approximate-messages-count",
        type: {
          name: "Number"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueueGetPropertiesWithHeadHeaders: msRest.CompositeMapper = {
  serializedName: "queue-getpropertieswithhead-headers",
  type: {
    name: "Composite",
    className: "QueueGetPropertiesWithHeadHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "x-ms-meta",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        },
        headerCollectionPrefix: "x-ms-meta-"
      },
      approximateMessagesCount: {
        serializedName: "x-ms-approximate-messages-count",
        type: {
          name: "Number"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueueSetMetadataHeaders: msRest.CompositeMapper = {
  serializedName: "queue-setmetadata-headers",
  type: {
    name: "Composite",
    className: "QueueSetMetadataHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueueGetAccessPolicyHeaders: msRest.CompositeMapper = {
  serializedName: "queue-getaccesspolicy-headers",
  type: {
    name: "Composite",
    className: "QueueGetAccessPolicyHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueueGetAccessPolicyWithHeadHeaders: msRest.CompositeMapper = {
  serializedName: "queue-getaccesspolicywithhead-headers",
  type: {
    name: "Composite",
    className: "QueueGetAccessPolicyWithHeadHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueueSetAccessPolicyHeaders: msRest.CompositeMapper = {
  serializedName: "queue-setaccesspolicy-headers",
  type: {
    name: "Composite",
    className: "QueueSetAccessPolicyHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessagesDequeueHeaders: msRest.CompositeMapper = {
  serializedName: "messages-dequeue-headers",
  type: {
    name: "Composite",
    className: "MessagesDequeueHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessagesClearHeaders: msRest.CompositeMapper = {
  serializedName: "messages-clear-headers",
  type: {
    name: "Composite",
    className: "MessagesClearHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessagesEnqueueHeaders: msRest.CompositeMapper = {
  serializedName: "messages-enqueue-headers",
  type: {
    name: "Composite",
    className: "MessagesEnqueueHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessagesPeekHeaders: msRest.CompositeMapper = {
  serializedName: "messages-peek-headers",
  type: {
    name: "Composite",
    className: "MessagesPeekHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessageIdUpdateHeaders: msRest.CompositeMapper = {
  serializedName: "messageid-update-headers",
  type: {
    name: "Composite",
    className: "MessageIdUpdateHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      popReceipt: {
        serializedName: "x-ms-popreceipt",
        type: {
          name: "String"
        }
      },
      timeNextVisible: {
        serializedName: "x-ms-time-next-visible",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessageIdDeleteHeaders: msRest.CompositeMapper = {
  serializedName: "messageid-delete-headers",
  type: {
    name: "Composite",
    className: "MessageIdDeleteHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};
