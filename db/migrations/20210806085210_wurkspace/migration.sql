-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT E'USER',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "handle" TEXT NOT NULL,
    "hashedSessionToken" TEXT,
    "antiCSRFToken" TEXT,
    "publicData" TEXT,
    "privateData" TEXT,
    "userId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hashedToken" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "sentTo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WS_LABELS" (
    "LABEL_CODE" SERIAL NOT NULL,
    "LABEL_TEXT" TEXT NOT NULL,
    "TAG" TEXT NOT NULL,

    PRIMARY KEY ("LABEL_CODE")
);

-- CreateTable
CREATE TABLE "WS_USERS" (
    "ID" SERIAL NOT NULL,
    "EMPLOYEE_ID" TEXT NOT NULL,
    "USER_NAME" TEXT NOT NULL,
    "PASSWORD" TEXT NOT NULL,

    PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "WS_EMPLOYEES" (
    "ID" TEXT NOT NULL,
    "FIRST_NAME" TEXT NOT NULL,
    "LAST_NAME" TEXT NOT NULL,
    "FULL_NAME" TEXT NOT NULL,
    "MANAGER_ID" TEXT NOT NULL,
    "IMAGE" TEXT NOT NULL,

    PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "WS_ONE_ON_ONES" (
    "ID" SERIAL NOT NULL,
    "EMPLOYEE_USER_ID" INTEGER NOT NULL,
    "OOO_WITH_USER_ID" INTEGER NOT NULL,
    "START_TIME" TIMESTAMP(3) NOT NULL,
    "END_TIME" TIMESTAMP(3) NOT NULL,
    "SUBJECT" TEXT NOT NULL,
    "AGENDA" TEXT NOT NULL,
    "CREATED_BY" INTEGER NOT NULL,
    "CREATED_DATE" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LAST_UPDATED_BY" INTEGER NOT NULL,
    "LAST_UPDATED_DATE" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "WS_OOO_INTELLIGENT_CONTEXT_POINTS" (
    "ID" SERIAL NOT NULL,
    "CONTEXT_SECTION" TEXT NOT NULL,
    "DISPLAY_FLAG" TEXT NOT NULL DEFAULT E'Y',
    "CONTEXT_POINT_TEXT" TEXT NOT NULL,
    "TAG_FOR_TOPIC" TEXT NOT NULL,
    "EMPLOYEE_ID" TEXT NOT NULL,
    "SOURCE_APPLICATION" TEXT NOT NULL,

    PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "WS_OOO_AGENDA_DETAILS" (
    "ID" SERIAL NOT NULL,
    "OOO_ID" INTEGER NOT NULL,
    "TOPIC_TYPE" TEXT NOT NULL,
    "CARD_TEXT" TEXT NOT NULL,
    "OICP_ID" INTEGER NOT NULL,
    "CREATED_BY" INTEGER NOT NULL,

    PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "WS_OOO_ACTION_ITEMS" (
    "ID" SERIAL NOT NULL,
    "AGENDA_DETAIL_ID" INTEGER NOT NULL,
    "CREATED_BY" INTEGER NOT NULL,
    "ACTION_TEXT" TEXT NOT NULL,
    "STATUS" TEXT NOT NULL,
    "ASSIGNEE_ID" INTEGER NOT NULL,

    PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session.handle_unique" ON "Session"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Token.hashedToken_type_unique" ON "Token"("hashedToken", "type");

-- AddForeignKey
ALTER TABLE "Session" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
