#!/bin/bash
echo "Generating secret key..."
openssl rand -base64 32
echo ""
echo "Copy this secret key ^^^"
echo ""
echo "Now update your prisma/schema.prisma file:"
echo "Change provider from 'sqlite' to 'postgresql'"
